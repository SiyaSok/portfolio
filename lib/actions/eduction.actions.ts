/** @format */

"use server";

import connectDB from "../database/connection";
import Education from "../database/models/educationModel";

export const getEduction = async () => {
  try {
    await connectDB();
    const education = await Education.find();
    return education;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw new Error("Failed to fetch education");
  }
};
export const getEductionById = async (id: string) => {
  try {
    await connectDB();
    const education = await Education.findById(id);
    return education;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw new Error("Failed to fetch education");
  }
};
