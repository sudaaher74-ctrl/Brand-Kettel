"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/brandkettle';
const services = [
    { slug: 'office-interior-design', name: 'Office Interior Design', title: 'Premium Office Interior Design Company', description: 'Transform your workspace with our premium office interior design services.' },
    { slug: 'corporate-office-interiors', name: 'Corporate Office Interiors', title: 'Corporate Office Interior Designers', description: 'Expert corporate office interiors that boost productivity and brand image.' },
    { slug: 'commercial-interior-design', name: 'Commercial Interior Design', title: 'Commercial Interior Design Company', description: 'Leading commercial interior design firm specializing in premium spaces.' },
    { slug: 'retail-store-interiors', name: 'Retail Store Interiors', title: 'Retail Store Interior Design', description: 'Engaging retail store interiors designed to increase footfall and sales.' },
    { slug: 'retail-fit-out-services', name: 'Retail Fit-Out Services', title: 'Retail Fit-Out Company', description: 'Comprehensive retail fit-out services for top brands.' },
    { slug: 'jewellery-showroom-interiors', name: 'Jewellery Showroom Interiors', title: 'Jewellery Showroom Interior Designers', description: 'Luxury jewellery showroom interiors crafted for elegance and security.' },
    { slug: 'turnkey-interior-solutions', name: 'Turnkey Interior Solutions', title: 'Turnkey Interior Contractors', description: 'End-to-end turnkey interior solutions for commercial spaces.' },
    { slug: 'design-and-build-services', name: 'Design & Build Services', title: 'Design and Build Interior Company', description: 'Seamless design and build services for office and retail spaces.' },
    { slug: 'furniture-manufacturing', name: 'Furniture Manufacturing', title: 'Custom Commercial Furniture', description: 'In-house furniture manufacturing for custom commercial interiors.' },
    { slug: 'project-management-services', name: 'Project Management Services', title: 'Interior Project Management', description: 'Professional project management services for timely interior execution.' }
];
const locations = [
    { slug: 'mumbai', city: 'Mumbai', title: 'Commercial Interior Company Mumbai', description: 'Top commercial interior designers in Mumbai specializing in office and retail.' },
    { slug: 'navi-mumbai', city: 'Navi Mumbai', title: 'Commercial Interior Company Navi Mumbai', description: 'Premium commercial interior company in Navi Mumbai.' },
    { slug: 'pune', city: 'Pune', title: 'Commercial Interior Company Pune', description: 'Leading commercial interior designers and fit-out contractors in Pune.' },
    { slug: 'bangalore', city: 'Bangalore', title: 'Commercial Interior Company Bangalore', description: 'Expert office interior design company in Bangalore.' },
    { slug: 'hyderabad', city: 'Hyderabad', title: 'Commercial Interior Company Hyderabad', description: 'Corporate interior designers serving Hyderabad tech parks.' },
    { slug: 'delhi-ncr', city: 'Delhi NCR', title: 'Commercial Interior Company Delhi NCR', description: 'Premium commercial and retail fit-out company in Delhi NCR.' },
    { slug: 'gurgaon', city: 'Gurgaon', title: 'Commercial Interior Company Gurgaon', description: 'Top corporate office interiors in Gurgaon.' },
    { slug: 'noida', city: 'Noida', title: 'Commercial Interior Company Noida', description: 'Expert commercial interior design firm in Noida.' },
    { slug: 'chennai', city: 'Chennai', title: 'Commercial Interior Company Chennai', description: 'Professional office and retail interior designers in Chennai.' },
    { slug: 'ahmedabad', city: 'Ahmedabad', title: 'Commercial Interior Company Ahmedabad', description: 'Leading commercial interior contractors in Ahmedabad.' }
];
const blogs = [
    { slug: 'office-interior-design-cost-in-india', title: 'Office Interior Design Cost in India', content: 'Detailed guide on office interior design costs in India...', excerpt: 'Discover the true cost of office interiors per sq ft in India.', publishedAt: new Date().toISOString() },
    { slug: 'commercial-interior-cost-per-sq-ft', title: 'Commercial Interior Cost Per Sq Ft', content: 'Breakdown of commercial interior costs...', excerpt: 'A complete breakdown of commercial interior costs.', publishedAt: new Date().toISOString() },
    { slug: 'office-fit-out-guide', title: 'Office Fit Out Guide', content: 'Step by step guide to office fit outs...', excerpt: 'Everything you need to know about planning an office fit-out.', publishedAt: new Date().toISOString() },
    { slug: 'retail-store-design-trends', title: 'Retail Store Design Trends', content: 'Latest trends in retail design...', excerpt: 'The biggest retail store design trends this year.', publishedAt: new Date().toISOString() },
    { slug: 'jewellery-showroom-design-ideas', title: 'Jewellery Showroom Design Ideas', content: 'Luxury ideas for jewellery showrooms...', excerpt: 'How to design a premium jewellery showroom that sells.', publishedAt: new Date().toISOString() },
    { slug: 'commercial-interior-trends', title: 'Commercial Interior Trends', content: 'What is trending in commercial interiors...', excerpt: 'Top commercial interior trends shaping the future of work.', publishedAt: new Date().toISOString() },
    { slug: 'workspace-design-guide', title: 'Workspace Design Guide', content: 'How to design the perfect workspace...', excerpt: 'The ultimate guide to modern workspace design.', publishedAt: new Date().toISOString() },
    { slug: 'office-renovation-guide', title: 'Office Renovation Guide', content: 'Planning an office renovation...', excerpt: 'How to successfully plan and execute an office renovation.', publishedAt: new Date().toISOString() },
    { slug: 'turnkey-interior-solutions-explained', title: 'Turnkey Interior Solutions Explained', content: 'What does turnkey mean?', excerpt: 'Why turnkey interior solutions are best for corporate projects.', publishedAt: new Date().toISOString() },
    { slug: 'how-to-choose-an-interior-contractor', title: 'How to Choose an Interior Contractor', content: 'Tips for choosing the right contractor...', excerpt: '10 things to look for when hiring a commercial interior contractor.', publishedAt: new Date().toISOString() }
];
async function seed() {
    console.log('Connecting to database...');
    const client = new mongodb_1.MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db();
    console.log('Seeding services...');
    for (const s of services) {
        await db.collection('services').updateOne({ slug: s.slug }, { $set: s }, { upsert: true });
    }
    console.log('Seeding locations...');
    for (const l of locations) {
        await db.collection('locations').updateOne({ slug: l.slug }, { $set: l }, { upsert: true });
    }
    console.log('Seeding blogs...');
    for (const b of blogs) {
        await db.collection('blog_posts').updateOne({ slug: b.slug }, { $set: b }, { upsert: true });
    }
    console.log('Database seeded successfully!');
    await client.close();
}
seed().catch(console.error);
