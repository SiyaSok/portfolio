/** @format */
import { projectSchema } from "@/lib/database/schemas/projectSchema";
import { z } from "zod";
export type ProjectType = z.infer<typeof projectSchema>;
