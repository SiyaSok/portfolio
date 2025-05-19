/** @format */

import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3).max(100),
  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9-]+$/),
  description: z.string().min(10).max(500),
  content: z.string().min(100),
  technologies: z.array(z.string()).min(1),
  featured: z.boolean().default(false),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  coverImage: z.string().url(),
  screenshots: z.array(z.string().url()).optional(),
  startDate: z.date(),
  endDate: z.date().optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});
