/** @format */
import { z } from "zod";

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

  // NEW: Achievements (quantifiable)
  achievements: z.array(z.string()).optional(),

  // NEW: Technologies used (more specific than skills)
  techStack: z.array(z.string()).optional(),

  // NEW: Team info
  teamSize: z.number().int().positive().optional(),
  reportingTo: z.string().optional(),

  // NEW: Links to projects/products
  relatedProjects: z.array(z.string()).optional(), // IDs of projects

  // NEW: Company metadata
  companyIndustry: z.string().optional(),
  companySize: z
    .enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"])
    .optional(),
});
