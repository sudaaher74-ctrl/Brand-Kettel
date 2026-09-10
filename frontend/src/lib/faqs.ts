/**
 * Homepage FAQ copy.
 *
 * Single source of truth: RonnFAQ renders these and the homepage emits them as
 * FAQPage JSON-LD. Keeping one array means the visible answers and the markup
 * can never drift apart — Google treats a mismatch as a structured-data
 * violation.
 */
export type Faq = { q: string; a: string };

export const HOME_FAQS: Faq[] = [
  {
    q: 'What types of commercial spaces do you specialize in?',
    a: 'We specialize in turnkey commercial fit-outs including corporate offices, co-working hubs, high-end jewellery showrooms, luxury retail flagships, and boutique hospitality spaces. From bare-shell civil work to bespoke joinery and handover, we handle every stage.',
  },
  {
    q: 'Do you manage all site execution in-house or outsource?',
    a: 'Our strength is end-to-end single-point accountability. We manage our own architectural and spatial planning teams, in-house joinery and furniture fabrication factory, and dedicated site project managers. You deal with one reliable partner throughout.',
  },
  {
    q: 'How do you deliver complex fast-track projects like PNG Jewellers in 27 days?',
    a: 'Fast-track execution relies on parallel processing: while on-site civil and MEP rough-ins are underway, all custom millwork, display counters, and joinery are prefabricated concurrently at our manufacturing facility. When the site is ready, installation is completed with clockwork precision.',
  },
  {
    q: 'Can you fabricate bespoke furniture according to strict global brand guidelines?',
    a: 'Yes. We have fabricated bespoke fixtures and retail displays for world-renowned brands including Gucci, PNG Jewellers, and Giva. Our factory works with specialized metals, high-pressure laminates, solid wood, acoustic panels, and precision glass.',
  },
  {
    q: 'Do you operate pan-India?',
    a: 'Yes. Headquartered with roots in Central India, we actively deliver turnkey commercial and retail projects in Mumbai, Delhi NCR, Hyderabad, Bengaluru, Bareilly, Indore, and tier-1/tier-2 hubs across India.',
  },
];
