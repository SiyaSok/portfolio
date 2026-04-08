/** @format */

"use server";

import connectDB from "../database/connection";
import Experience from "../database/models/experienceModel";

export const getExperiences = async () => {
  try {
    await connectDB();
    const experiences = await Experience.find().lean();
    const safeExperiences = JSON.parse(JSON.stringify(experiences));
    return safeExperiences;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    throw new Error("Failed to fetch experiences");
  }
};
export const getExperienceById = async (id: string) => {
  try {
    await connectDB();

    const experience = await Experience.findById(id).lean();

    const safeExperience = JSON.parse(JSON.stringify(experience));
    return safeExperience;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    throw new Error("Failed to fetch experiences");
  }
};
