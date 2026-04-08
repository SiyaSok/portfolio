/** @format */

"use server";

import connectDB from "../database/connection";
import Project from "../database/models/projectModel";

export const getProjects = async () => {
  try {
    await connectDB();
    const projects = await Project.find();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
  }
};
export const getProjectById = async (id: string) => {
  try {
    await connectDB();
    const project = await Project.findById(id);

    console.log("Fetched project:", project);

    return project;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
  }
};
