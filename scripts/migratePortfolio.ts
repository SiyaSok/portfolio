/** @format */

// scripts/migratePortfolio.ts
import Education from "../lib/database/models/educationModel";
import Experience from "../lib/database/models/experienceModel";
import Project from "../lib/database/models/projectModel";
import mongoose from "mongoose";

async function migrateProjects() {
  const projects = await Project.find({});

  for (const project of projects) {
    const updates: any = {};

    // Add new fields with defaults
    if (!project.projectType) updates.projectType = "Personal";
    if (!project.status) updates.status = "Completed";
    if (!project.myRole) updates.myRole = "Developer";

    // Transform existing fields if needed
    // For example, move technologies to tags
    if (project.technologies && !project.tags) {
      updates.tags = project.technologies;
    }

    if (Object.keys(updates).length > 0) {
      await Project.updateOne({ _id: project._id }, { $set: updates });
      console.log(`Updated project: ${project.title}`);
    }
  }
}

async function migrateExperiences() {
  const experiences = await Experience.find({});

  for (const exp of experiences) {
    const updates: any = {};

    if (!exp.achievements) updates.achievements = [];
    if (!exp.techStack && exp.skills) updates.techStack = exp.skills;

    if (Object.keys(updates).length > 0) {
      await Experience.updateOne({ _id: exp._id }, { $set: updates });
      console.log(`Updated experience: ${exp.role} at ${exp.company}`);
    }
  }
}

async function migrateEducation() {
  const education = await Education.find({});

  for (const edu of education) {
    const updates: any = {};

    // Fix typo fields if they exist
    if (edu.qaulification && !edu.qualification) {
      updates.qualification = edu.qaulification;
    }
    if (edu.collage && !edu.college) {
      updates.college = edu.collage;
    }

    // Add new fields
    if (edu.currentlyStudying === undefined) {
      updates.currentlyStudying = edu.endDate ? false : true;
    }

    if (Object.keys(updates).length > 0) {
      await Education.updateOne({ _id: edu._id }, { $set: updates });
      console.log(
        `Updated education: ${edu.qaulification || edu.qualification}`,
      );
    }
  }
}

// Run migrations
async function runMigrations() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");

    await migrateProjects();
    await migrateExperiences();
    await migrateEducation();

    console.log("Migrations completed!");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await mongoose.disconnect();
  }
}

runMigrations();
