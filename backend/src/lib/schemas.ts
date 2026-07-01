import { z } from 'zod';

export const ProjectSchema = z.object({
  slug: z.string().min(1, 'Slug is required'),
  name: z.string().min(1, 'Name is required'),
  location: z.string().optional().default(''),
  category: z.enum(['Retail', 'Commercial', 'Residential', 'Hospitality', 'Education']).optional().default('Commercial'),
  area: z.string().optional().default(''),
  year: z.string().optional().default(''),
  image: z.string().optional().default(''),
  gallery: z.array(z.string()).optional().default([]),
  description: z.string().optional().default(''),
  blurb: z.string().optional().default(''), // Keeping for backward compatibility
  materialsUsed: z.array(z.string()).optional().default([]),
  status: z.enum(['Completed', 'Ongoing']).optional().default('Completed'),
  segment: z.enum(['commercial', 'residential']).optional().default('commercial'),
});

export const ServiceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional().default(''),
  image: z.string().optional().default(''),
});

export const BlogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().optional().default(''),
  content: z.string().optional().default(''),
  image: z.string().optional().default(''),
  published: z.boolean().optional().default(false),
  metaTitle: z.string().optional().default(''),
  metaDescription: z.string().optional().default(''),
  keywords: z.string().optional().default(''),
  imageAlt: z.string().optional().default(''),
});

export const JobOpeningSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  location: z.string().optional().default(''),
  type: z.enum(['Full-time', 'Part-time', 'Contract']).optional().default('Full-time'),
  description: z.string().optional().default(''),
  requirements: z.string().optional().default(''),
  isActive: z.boolean().optional().default(true),
});

export const JobApplicationSchema = z.object({
  jobId: z.string().min(1, 'Job ID is required'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional().default(''),
  resumeUrl: z.string().optional().default(''),
  message: z.string().optional().default(''),
});

export const TestimonialSchema = z.object({
  clientName: z.string().min(1, 'Client Name is required'),
  company: z.string().optional().default(''),
  feedback: z.string().min(1, 'Feedback is required'),
  rating: z.number().min(1).max(5).optional().default(5),
});

export const LeadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().optional().default(''),
  message: z.string().optional().default(''),
  status: z.enum(['New', 'Contacted', 'Closed']).optional().default('New'),
});

export const SettingsSchema = z.object({
  contactEmail: z.string().email('Invalid email address').optional().default(''),
  contactPhone: z.string().optional().default(''),
  officeAddress: z.string().optional().default(''),
  facebookUrl: z.string().optional().default(''),
  instagramUrl: z.string().optional().default(''),
  linkedinUrl: z.string().optional().default(''),
  twitterUrl: z.string().optional().default(''),
  defaultMetaTitle: z.string().optional().default(''),
  defaultMetaDescription: z.string().optional().default(''),
  defaultKeywords: z.string().optional().default(''),
});
