"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadSchema = exports.BlogPostSchema = exports.ProjectSchema = void 0;
const zod_1 = require("zod");
exports.ProjectSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1, 'Slug is required'),
    name: zod_1.z.string().min(1, 'Name is required'),
    location: zod_1.z.string().optional().default(''),
    category: zod_1.z.string().optional().default(''),
    area: zod_1.z.string().optional().default(''),
    year: zod_1.z.string().optional().default(''),
    image: zod_1.z.string().optional().default(''),
    gallery: zod_1.z.array(zod_1.z.string()).optional().default([]),
    blurb: zod_1.z.string().optional().default(''),
    segment: zod_1.z.enum(['commercial', 'residential']).optional().default('commercial'),
});
exports.BlogPostSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required'),
    slug: zod_1.z.string().min(1, 'Slug is required'),
    excerpt: zod_1.z.string().optional().default(''),
    content: zod_1.z.string().optional().default(''),
    image: zod_1.z.string().optional().default(''),
    published: zod_1.z.boolean().optional().default(false),
});
exports.LeadSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    phone: zod_1.z.string().min(1, 'Phone is required'),
    email: zod_1.z.string().email('Invalid email address'),
    projectType: zod_1.z.string().optional().default(''),
    message: zod_1.z.string().optional().default(''),
});
