import { z } from 'zod';

export const ProjectSchema = z.object({
  slug: z.string().min(1, 'Slug is required'),
  name: z.string().min(1, 'Name is required'),
  location: z.string().optional().default(''),
  category: z.string().optional().default(''),
  area: z.string().optional().default(''),
  year: z.string().optional().default(''),
  image: z.string().optional().default(''),
  gallery: z.array(z.string()).optional().default([]),
  blurb: z.string().optional().default(''),
  segment: z.enum(['commercial', 'residential']).optional().default('commercial'),
});

export const BlogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().optional().default(''),
  content: z.string().optional().default(''),
  image: z.string().optional().default(''),
  published: z.boolean().optional().default(false),
});

export const LeadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().optional().default(''),
  message: z.string().optional().default(''),
});
