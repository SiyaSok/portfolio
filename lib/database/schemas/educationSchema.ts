/** @format */
import { z } from "zod";

export const educationSchemaZod = z.object({
  _id: z.string().min(3).max(100),

  // FIXED: Typo corrections
  qualification: z.string().min(3).max(100), // was "qaulification"
  college: z.string().min(3).max(100), // was "collage"
  description: z.string().min(10).max(1000),
  location: z.string().min(3).max(100),
  startDate: z.date(),
  endDate: z.date().optional().nullable(),

  // NEW: Currently studying flag (mirrors experience)
  currentlyStudying: z.boolean().default(false),

  logo: z.string().url().optional(),
  website: z.string().url().optional(),
  qualificationImage: z.string().url().optional(),

  // NEW: Grade/GPA
  grade: z.string().optional(), // e.g., "A", "85%", "3.8 GPA"

  // NEW: Field of study
  fieldOfStudy: z.string().optional(),

  // NEW: Achievements during education
  achievements: z.array(z.string()).optional(),

  // NEW: Relevant coursework
  relevantCourses: z.array(z.string()).optional(),

  // NEW: Thesis/Dissertation
  thesis: z
    .object({
      title: z.string(),
      description: z.string().optional(),
      url: z.string().url().optional(),
    })
    .optional(),
});
