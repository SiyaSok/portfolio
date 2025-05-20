/** @format */

// lib/database/schemas/experienceSchema.ts
import { z } from "zod";

// Zod Schema for validation
export const eductionSchemaZod = z.object({
  _id: z.string().min(3).max(100),
  qaulification: z.string().min(3).max(100),
  collage: z.string().min(3).max(100),
  description: z.string().min(10).max(1000),
  location: z.string().min(3).max(100),
  startDate: z.date(),
  endDate: z.date().optional().nullable(),
  logo: z.string().url().optional(),
  website: z.string().url().optional(),
  qaulificationImage: z.string().url().optional(),
});

// Mongoose Schema
