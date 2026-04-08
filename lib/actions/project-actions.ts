/** @format */

"use server";

import connectDB from "../database/connection";
import Project from "../database/models/projectModel";

export const getProjects = async () => {
  try {
    await connectDB();
    const projects = await Project.find().lean();
    const safeProjects = JSON.parse(JSON.stringify(projects));
    return safeProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
  }
};
export const getProjectById = async (id: string) => {
  try {
    await connectDB();
    const project = await Project.findById(id).lean();

    const safeProject = JSON.parse(JSON.stringify(project));

    return safeProject;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
  }
};
