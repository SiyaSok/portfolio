/** @format */

"use server";

import { EductionType } from "@/types";
import connectDB from "../database/connection";
import Education from "../database/models/educationModel";
import { convertToPlainObject } from "../utils";

export const getEduction = async (): Promise<
  EductionType | { error: string }
> => {
  try {
    await connectDB();
    const education = await Education.find().lean();
    return convertToPlainObject(education) as unknown as EductionType;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw new Error("Failed to fetch education");
  }
};
export const getEductionById = async (id: string) => {
  try {
    await connectDB();
    const education = await Education.findById(id).lean();

    const safeEducation = JSON.parse(JSON.stringify(education));
    return safeEducation;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw new Error("Failed to fetch education");
  }
};
