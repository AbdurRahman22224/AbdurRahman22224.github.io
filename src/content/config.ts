import { defineCollection, z } from 'astro:content';
// Trigger type regeneration

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Your Name'),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    github: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
};