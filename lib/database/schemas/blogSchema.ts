/** @format */

import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(3).max(100),
  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9-]+$/),
  excerpt: z.string().min(10).max(200),
  content: z.string().min(500),
  tags: z.array(z.string()).min(1),
  featuredImage: z.string().url(),
  published: z.boolean().default(false),
  publishedAt: z.date().optional(),
  author: z.string().min(3).max(50),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});
