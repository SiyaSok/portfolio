/** @format */
import { eductionSchemaZod } from "@/lib/database/schemas/educationSchema";
import { experienceSchemaZod } from "@/lib/database/schemas/experienceSchema";
import { projectSchema } from "@/lib/database/schemas/projectSchema";
import { z } from "zod";

export type ProjectType = z.infer<typeof projectSchema>;
export type ExperienceType = z.infer<typeof experienceSchemaZod>;
export type EductionType = z.infer<typeof eductionSchemaZod>;
