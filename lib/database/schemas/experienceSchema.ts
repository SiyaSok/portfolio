/** @format */

// lib/database/schemas/experienceSchema.ts
import { z } from "zod";

// Zod Schema for validation
export const experienceSchemaZod = z.object({
  _id: z.string().min(3).max(100),
  role: z.string().min(3).max(100),
  company: z.string().min(3).max(100),
  description: z.string().min(10).max(1000),
  employmentType: z.enum([
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
  ]),
  location: z.string().min(3).max(100),
  locationType: z.enum(["On-site", "Hybrid", "Remote"]),
  startDate: z.date(),
  endDate: z.date().optional().nullable(),
  currentlyWorking: z.boolean().default(false),
  skills: z.array(z.string().min(1)).min(1),
  responsibilities: z.array(z.string().min(10)).min(1),
  logo: z.string().url().optional(),
  website: z.string().url().optional(),
  featured: z.boolean().default(false),
});

// Mongoose Schema
