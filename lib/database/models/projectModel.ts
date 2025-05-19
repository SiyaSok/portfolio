/** @format */

import { Schema, model, models } from "mongoose";

// Define the Mongoose schema to match your Zod schema
const ProjectSchema = new Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 100 },
    slug: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      match: /^[a-z0-9-]+$/,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
    content: { type: String, required: true, minlength: 100 },
    technologies: {
      type: [String],
      required: true,
    },
    featured: { type: Boolean, default: false },
    githubUrl: { type: String },
    liveUrl: { type: String },
    coverImage: { type: String, required: true },
    screenshots: { type: [String] },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // auto-manages createdAt and updatedAt
  }
);

// Use existing model if already compiled, otherwise define it
const Project = models.Project || model("Project", ProjectSchema);

export default Project;
