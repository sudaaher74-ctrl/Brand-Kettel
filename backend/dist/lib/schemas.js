"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsSchema = exports.LeadSchema = exports.TestimonialSchema = exports.JobApplicationSchema = exports.JobOpeningSchema = exports.BlogPostSchema = exports.ServiceSchema = exports.ProjectSchema = void 0;
const zod_1 = require("zod");
exports.ProjectSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1, 'Slug is required'),
    name: zod_1.z.string().min(1, 'Name is required'),
    location: zod_1.z.string().optional().default(''),
    category: zod_1.z.enum(['Retail', 'Commercial', 'Residential', 'Hospitality', 'Education']).optional().default('Commercial'),
    area: zod_1.z.string().optional().default(''),
    year: zod_1.z.string().optional().default(''),
    image: zod_1.z.string().optional().default(''),
    gallery: zod_1.z.array(zod_1.z.string()).optional().default([]),
    description: zod_1.z.string().optional().default(''),
    blurb: zod_1.z.string().optional().default(''), // Keeping for backward compatibility
    materialsUsed: zod_1.z.array(zod_1.z.string()).optional().default([]),
    status: zod_1.z.enum(['Completed', 'Ongoing']).optional().default('Completed'),
    segment: zod_1.z.enum(['commercial', 'residential']).optional().default('commercial'),
});
exports.ServiceSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required'),
    description: zod_1.z.string().optional().default(''),
    image: zod_1.z.string().optional().default(''),
});
exports.BlogPostSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required'),
    slug: zod_1.z.string().min(1, 'Slug is required'),
    excerpt: zod_1.z.string().optional().default(''),
    content: zod_1.z.string().optional().default(''),
    image: zod_1.z.string().optional().default(''),
    published: zod_1.z.boolean().optional().default(false),
    metaTitle: zod_1.z.string().optional().default(''),
    metaDescription: zod_1.z.string().optional().default(''),
    keywords: zod_1.z.string().optional().default(''),
    imageAlt: zod_1.z.string().optional().default(''),
});
exports.JobOpeningSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required'),
    location: zod_1.z.string().optional().default(''),
    type: zod_1.z.enum(['Full-time', 'Part-time', 'Contract']).optional().default('Full-time'),
    description: zod_1.z.string().optional().default(''),
    requirements: zod_1.z.string().optional().default(''),
    isActive: zod_1.z.boolean().optional().default(true),
});
exports.JobApplicationSchema = zod_1.z.object({
    jobId: zod_1.z.string().min(1, 'Job ID is required'),
    name: zod_1.z.string().min(1, 'Name is required'),
    email: zod_1.z.string().email('Invalid email address'),
    phone: zod_1.z.string().optional().default(''),
    resumeUrl: zod_1.z.string().optional().default(''),
    message: zod_1.z.string().optional().default(''),
});
exports.TestimonialSchema = zod_1.z.object({
    clientName: zod_1.z.string().min(1, 'Client Name is required'),
    company: zod_1.z.string().optional().default(''),
    feedback: zod_1.z.string().min(1, 'Feedback is required'),
    rating: zod_1.z.number().min(1).max(5).optional().default(5),
});
exports.LeadSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    phone: zod_1.z.string().min(1, 'Phone is required'),
    email: zod_1.z.string().email('Invalid email address'),
    projectType: zod_1.z.string().optional().default(''),
    message: zod_1.z.string().optional().default(''),
    status: zod_1.z.enum(['New', 'Contacted', 'Closed']).optional().default('New'),
});
exports.SettingsSchema = zod_1.z.object({
    contactEmail: zod_1.z.string().email('Invalid email address').optional().default(''),
    contactPhone: zod_1.z.string().optional().default(''),
    officeAddress: zod_1.z.string().optional().default(''),
    facebookUrl: zod_1.z.string().optional().default(''),
    instagramUrl: zod_1.z.string().optional().default(''),
    linkedinUrl: zod_1.z.string().optional().default(''),
    twitterUrl: zod_1.z.string().optional().default(''),
    defaultMetaTitle: zod_1.z.string().optional().default(''),
    defaultMetaDescription: zod_1.z.string().optional().default(''),
    defaultKeywords: zod_1.z.string().optional().default(''),
});
