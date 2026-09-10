# Content architecture: city pages, internal linking, and `/blog`

Status: **proposal — nothing here is built.** Phase 8 of the remediation brief.

Measured against the production build on 2026-09-10 using
`frontend/scripts/link-graph.mjs`, which crawls the running build from `/` and
diffs what it reaches against `sitemap.xml`.

---

## 0. Read this first: the doorway pages already exist

The brief asks for a city-page structure that avoids doorway-page penalties. The
site already has one, and it is currently the doorway-page pattern in its
purest form.

`backend/src/scripts/seed-seo.ts` seeds a `locations` collection, which
`/locations/[city]` renders through a single template. The seed ships **ten**
cities:

> mumbai, navi-mumbai, pune, bangalore, hyderabad, delhi-ncr, gurgaon, noida,
> chennai, ahmedabad

Each record carries exactly two unique fields — a `title` and a one-sentence
`description`. Everything else on the rendered page is boilerplate with the city
name string-substituted in:

- H1 → `location.title` ("Commercial Interior Company Mumbai")
- Intro → `location.description` + a fixed sentence ending "…directly to {city}."
- "Why Partner With Us in {city}?" → identical paragraph on all ten pages
- Identical four-item capability list on all ten pages
- A `LocalBusiness` JSON-LD node with a `PostalAddress` whose
  `addressLocality` is that city

Three problems, in order of severity:

1. **Ten near-identical pages differing only by a city name is the definition of
   a doorway page.** Google's guidance names this pattern explicitly. It is not
   a grey area.
2. **The `LocalBusiness` + `PostalAddress` markup asserts a business premises in
   each of those ten cities.** Brand Kettle has one office, in Indore. Marking up
   an address that does not exist is a structured-data violation on top of the
   doorway problem, and it fights the single `GeneralContractor` entity the root
   layout now emits.
3. **Seven of the ten cities are not cities the business claims execution in.**
   The brief lists Mumbai, Delhi NCR, Hyderabad, Bengaluru, Bareilly and Indore.
   Pune, Chennai, Ahmedabad, Navi Mumbai, Gurgaon and Noida appear in the seed
   with no corresponding projects.

The same seed also creates ten `services` records and ten blog posts whose
`content` is placeholder text ("Detailed guide on office interior design costs
in India…"). If that seed has been run against the production database, those
are live thin pages too.

**Before building anything new:** check whether `seed-seo.ts` has been run in
production (`db.locations.countDocuments()`). If it has, the ten location pages
and the ten placeholder blog posts should be removed or noindexed as a first
action — they are a liability today, and adding good city pages alongside them
will not offset it.

---

## 1. Proposed city-page structure

### Which cities qualify

A city gets a page only when there is enough real, city-specific material to
fill it. The gate is deliberately high, because a page that cannot clear it is
a doorway page by definition.

**Minimum bar to publish a city page — all four must be true:**

| # | Requirement | Why |
|---|---|---|
| 1 | ≥ 2 delivered projects in that city, with photography and named clients | The only content a competitor cannot copy |
| 2 | A named local contact — site lead, regional manager, or partner firm — with a direct phone number | Makes the page a real service page, not a landing page |
| 3 | ≥ 150 words of genuinely local operational detail (approvals, mall fit-out timings, labour/material sourcing) | The part that earns the ranking |
| 4 | A stated delivery model: own site team, or partner-executed | Honest, and it is what a buyer actually wants to know |

Against the six cities in the brief and the projects in `src/lib/data.ts`:

| City | Known projects | Verdict |
|---|---|---|
| Mumbai | PNG Jewellers (Goregaon, 3,400 sq ft, 27 days) | **Build** once a second project and a local contact exist |
| Bareilly | Havana Lounge, Ramada Encore (25,000 sq ft) | **Build** — two projects, strong story |
| Delhi NCR | Pret A Manger (Select City Walk), &Work (Faridabad) | **Build** — two projects |
| Hyderabad | Taksha | **Hold** — one project; build when a second lands |
| Bengaluru | none identified in the codebase | **Do not build** |
| Indore | HQ, own office, Nanokirti, LIC | Covered by the homepage and `/about`; a separate page would compete with them |

That is three pages at launch, not six, and none at all for Bengaluru until
there is work to show. Three strong pages beat six thin ones, and the six thin
ones carry real risk.

### URL pattern

Keep the existing route: **`/locations/[city]`**.

- `/locations/mumbai`
- `/locations/delhi-ncr`
- `/locations/bareilly`

Reasons to keep it rather than invent something new: the route, the sitemap
integration and the CMS collection already exist; the URLs are already indexed
(and will need `410` or `301` handling for the seven cities being retired
either way); and `/locations/` reads as a genuine directory rather than a
keyword string.

Rejected alternatives: `/commercial-fit-outs-in-mumbai` (keyword-stuffed slug,
and it collides with the expertise-page namespace); `/mumbai` (top-level
namespace pollution).

### Title and H1 pattern

Do **not** template these. A templated title across a set of city pages is one
of the signals that identifies the set as generated. Write each one, and make
the H1 reference the actual work.

Shape to aim for, not a formula to fill in:

| | Pattern | Example (Mumbai) |
|---|---|---|
| `<title>` | `{Primary service} in {City} \| Brand Kettle BuildSpaces` | `Commercial Fit-Out Contractors in Mumbai \| Brand Kettle BuildSpaces` |
| H1 | Names the work, not the keyword | `Retail and showroom fit-outs across Mumbai` |
| Meta description | Leads with the strongest local proof | `We delivered PNG Jewellers' 3,400 sq ft Goregaon showroom in 27 days. Turnkey fit-outs across Mumbai, from bare shell to handover.` |

Every city's H1 should be visibly different in structure, not just in the city
name.

### Content outline

Sections 1, 2 and 5 must be unique per city. If they cannot be, the page should
not exist.

1. **Hero** — H1 plus one sentence of local proof. City-specific.
2. **Projects delivered here** (the largest section) — 2–4 real projects with
   photography, area, timeline, scope, and a link to the full
   `/portfolio/[slug]` case study. City-specific.
3. **What we do here** — 3–5 of the six expertise areas, each a short paragraph
   linking to the expertise page. May be assembled from shared components, but
   the selection and ordering differ by city (Mumbai leads with retail and
   jewellery; Bareilly leads with hospitality).
4. **How delivery works from Indore** — factory joinery prefabricated in Indore,
   shipped and installed by the site team. Shared across cities and honest about
   it; this is the operating model, not a claim of local presence.
5. **Local operating notes** — the section that carries the page. Mall fit-out
   working windows and society NOC requirements in Mumbai; DDA/MCD approval
   routes and Select City Walk vendor rules in Delhi NCR; material sourcing and
   labour availability in Bareilly. City-specific.
6. **Local contact** — named person, direct number, coverage area. City-specific.
7. **CTA** — the same `ConsultationForm`, with the city pre-selected.

### Structured data on city pages

Replace the current per-city `LocalBusiness` node. The business has one
premises, and one entity should represent it.

- Reference the existing `GeneralContractor` node by `@id`
  (`https://www.brandkettle.co.in/#organization`) rather than emitting a new
  business per city.
- Express coverage through `areaServed` on that single entity, which
  `src/lib/structuredData.ts` already does for all six cities.
- Add `BreadcrumbList` (Home → Locations → City).
- Do **not** emit `PostalAddress` for a city with no office. Do **not** add
  `Review` or `AggregateRating`.

### Retiring the seven cities

For pages that have been indexed and will not be rebuilt, `410 Gone` is the
correct response — it removes them faster than `404` and does not falsely imply
relevance the way a blanket `301` to `/contact` would. Redirect only where there
is a genuinely equivalent destination (`/locations/gurgaon` and
`/locations/noida` → `/locations/delhi-ncr`, once that page is real).

---

## 2. Internal linking plan

Today every city page would be an orphan; the seeded ones already are (see
§3). Links have to be added deliberately.

**From the homepage.** The footer already carries a "Pan-India Turnkey Reach"
block listing the cities as plain text. Turn the three published cities into
links there. Do not link cities without pages, and do not add a "we serve 20
cities" list — a list of links to pages that do not exist is worse than no list.

**From the six expertise pages.** At the foot of each, a short "Where we have
delivered this" block linking only to cities with a matching project:

| Expertise page | Links to |
|---|---|
| `/commercial-fit-outs` | `/locations/delhi-ncr` (&Work Faridabad) |
| `/retail-fit-outs` | `/locations/delhi-ncr` (Pret A Manger), `/locations/mumbai` |
| `/jewellery-showrooms` | `/locations/mumbai` (PNG Jewellers) |
| `/residential-interiors` | none yet |
| `/custom-furniture` | none yet |
| `/library-institutional-furniture` | none yet |

**From project pages.** Each `/portfolio/[slug]` already shows a location. Make
it a link when a city page exists — this is the highest-value link in the set,
because it connects the proof to the page that claims it.

**Reciprocal.** Each city page links back to the projects it cites and to the
expertise pages it lists. That is what makes the cluster a cluster rather than a
set of leaves.

**Not proposed:** a `/locations` index page. With three cities it adds a hop
without adding value; revisit past six.

---

## 3. Current internal link depth and orphans

Crawled from `/` on the production build, following internal `<a href>`s.
`/admin` excluded.

**Depth 0** — `/`

**Depth 1** — everything below is linked from the global nav or footer, so it is
one click from the homepage:

`/about` · `/blog` · `/careers` · `/commercial-fit-outs` · `/contact` ·
`/custom-furniture` · `/jewellery-showrooms` · `/portfolio` · `/process` ·
`/residential-interiors` · `/retail-fit-outs` ·
`/portfolio/and-work-faridabad` · `/portfolio/giva` · `/portfolio/gucci` ·
`/portfolio/havana-lounge-bareilly` · `/portfolio/png` ·
`/portfolio/pret-a-manger-delhi` · `/portfolio/ramada-encore-bareilly` ·
`/portfolio/taksha-hyderabad`

**Depth 2**

| Route | Reached only from |
|---|---|
| `/portfolio/indriya` | `/portfolio`, `/commercial-fit-outs`, `/jewellery-showrooms` |
| `/portfolio/nanokirti-pvt` | `/portfolio`, `/commercial-fit-outs`, `/custom-furniture` |

These two are the only projects missing from the homepage marquee
(`RonnRunningLine`), which carries the other eight. Adding them there — or
rotating the marquee's selection — puts every project at depth 1. Low effort,
worth doing.

**Orphans — in `sitemap.xml`, zero internal links:**

| Route | Note |
|---|---|
| `/services` | A real page listing the four turnkey service lines. Nothing links to it: the nav's "Services" item is a dropdown to the six expertise pages, and the footer lists those six directly. Either link it from the nav dropdown as an overview, or drop it from the sitemap. |
| `/library-institutional-furniture` | A full expertise page with its own `Service` schema and project grid, absent from both the nav dropdown and the footer's five-item expertise list. This looks like an oversight — it is the sixth expertise page and should sit alongside the other five. |

**Linked but not in the sitemap:** none.

Plus the seeded `/locations/*` and `/services/*` pages, if the seed has been run:
they are in the sitemap via the API and have no internal links at all.

---

## 4. Should `/blog` be noindexed?

**Yes — until it has at least three substantial posts.**

The blog index currently renders an empty state: "New Articles Arriving Soon —
Our architectural directors are documenting case studies and turnkey execution
insights." It is in the sitemap at priority 0.5 and is linked from the footer on
every page.

An indexed empty index is a thin page from a domain that is trying to establish
topical authority. It is a small negative signal, and it costs crawl budget that
should go to the project pages.

If the ten seeded placeholder posts *are* live, the situation is worse than
empty: ten posts whose body text is a single placeholder sentence each is thin
content at scale, which is a materially bigger risk than one empty index page.
Verify this first.

**Recommended:**

1. Set `robots: { index: false, follow: true }` on `/blog` and `/blog/[slug]`.
   `follow` keeps link equity flowing.
2. Remove `/blog` and any `/blog/*` entries from `sitemap.ts` while it is
   noindexed — a sitemap should only list pages you want indexed.
3. Keep the footer link. Visitors may still use it, and `follow` preserves the
   crawl path.
4. Reverse all three the day the third real post publishes. Make it one commit
   so it is not forgotten.

Keeping it indexed is defensible only if posts are genuinely imminent, and the
empty-state copy has been promising them for some time already.

---

## 5. Suggested order of work

1. Check whether `seed-seo.ts` has been run in production. This determines
   whether the rest is cleanup or greenfield.
2. If it has: `410` the seven unqualified `/locations/*` pages and remove the
   placeholder blog posts.
3. Noindex `/blog` and drop it from the sitemap.
4. Fix the two orphans: link `/library-institutional-furniture` from the nav
   and footer; decide `/services` in or out.
5. Add `/portfolio/indriya` and `/portfolio/nanokirti-pvt` to the homepage
   marquee.
6. Gather the material for Mumbai, Delhi NCR and Bareilly against the
   four-point bar. Write the three pages by hand.
7. Add the internal links in §2, in both directions.
8. Revisit Hyderabad and Bengaluru when a second project lands in either.
