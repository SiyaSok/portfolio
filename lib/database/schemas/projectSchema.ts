/** @format */
import { z } from "zod";

export const projectSchema = z.object({
  _id: z.string().min(3).max(100),
  title: z.string().min(3).max(100),
  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9-]+$/),
  description: z.string().min(10).max(500),
  content: z.string().min(100),
  technologies: z.array(z.string()).min(1),
  projectType: z
    .enum(["Personal", "Client", "Open Source", "Hackathon"])
    .default("Personal"),
  myRole: z.string().min(2).max(100).optional(), // e.g., "Lead Developer", "UI/UX Designer"
  featured: z.boolean().default(false),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  coverImage: z.string().url(),
  screenshots: z.array(z.string().url()).optional(),

  // NEW: Video demo
  demoVideoUrl: z.string().url().optional(),

  // NEW: Project status
  status: z
    .enum(["Planning", "In Progress", "Completed", "On Hold", "Archived"])
    .default("Completed"),

  startDate: z.date(),
  endDate: z.date().optional(),

  // NEW: Team info
  teamSize: z.number().int().positive().optional(),
  collaborators: z
    .array(
      z.object({
        name: z.string(),
        role: z.string(),
        githubUrl: z.string().url().optional(),
      }),
    )
    .optional(),

  // NEW: Metrics/impact
  metrics: z
    .object({
      stars: z.number().int().min(0).optional(),
      forks: z.number().int().min(0).optional(),
      downloads: z.number().int().min(0).optional(),
      liveUsers: z.number().int().min(0).optional(),
    })
    .optional(),

  // NEW: Tags for better filtering
  tags: z.array(z.string()).optional(),

  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});
