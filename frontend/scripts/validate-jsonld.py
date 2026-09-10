"""Run `npm run build` first, then: python3 scripts/validate-jsonld.py

Validate every JSON-LD block in the built HTML against the schema.org vocabulary.

Checks that each @type is a real schema.org type and that every property used is
declared with that type (or one of its supertypes) in domainIncludes.
"""
import json, re, sys, glob, os

VOCAB = os.environ.get('SCHEMA_VOCAB', 'schemaorg-current-https.jsonld')
if not os.path.exists(VOCAB):
    sys.exit(
        f'Missing schema.org vocabulary at {VOCAB}. Download it once with:\n'
        '  curl -sSO https://schema.org/version/latest/schemaorg-current-https.jsonld'
    )
g = json.load(open(VOCAB))['@graph']

def ids(v):
    if v is None: return []
    if isinstance(v, dict): return [v['@id']]
    return [x['@id'] for x in v]

types, props = {}, {}
for n in g:
    t = n.get('@type')
    tl = t if isinstance(t, list) else [t]
    name = n['@id'].split(':')[-1]
    if 'rdfs:Class' in tl:
        types[name] = [i.split(':')[-1] for i in ids(n.get('rdfs:subClassOf'))]
    if 'rdf:Property' in tl:
        props[name] = set(i.split(':')[-1] for i in ids(n.get('schema:domainIncludes')))

def supertypes(t, seen=None):
    seen = seen or set()
    if t in seen or t not in types: return seen
    seen.add(t)
    for p in types[t]:
        supertypes(p, seen)
    return seen

KEYWORDS = {'@context', '@type', '@id', '@graph'}
errors, checked = [], 0

def check(node, where):
    global checked
    if not isinstance(node, dict): return
    t = node.get('@type')
    if t is None: return
    checked += 1
    if t not in types:
        errors.append(f'{where}: unknown schema.org type "{t}"')
        return
    allowed = supertypes(t)
    for k, v in node.items():
        if k in KEYWORDS: continue
        if k not in props:
            errors.append(f'{where}: unknown property "{k}" on {t}')
        elif not (props[k] & allowed):
            errors.append(f'{where}: property "{k}" is not valid on {t} (domain: {sorted(props[k])[:6]})')
        for child in (v if isinstance(v, list) else [v]):
            check(child, f'{where} > {t}.{k}')

for f in sorted(glob.glob('.next/server/app/**/*.html', recursive=True)):
    for raw in re.findall(r'<script type="application/ld\+json">(.*?)</script>', open(f).read(), re.S):
        try:
            check(json.loads(raw), os.path.relpath(f, '.next/server/app'))
        except json.JSONDecodeError as e:
            errors.append(f'{f}: JSON-LD does not parse: {e}')

print(f'Validated {checked} schema.org nodes across the built HTML.')
if errors:
    print(f'\n{len(errors)} problem(s):')
    for e in sorted(set(errors)): print('  -', e)
    sys.exit(1)
print('All @type values and properties are valid schema.org vocabulary.')
