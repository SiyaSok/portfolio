/** @format */

import { Schema, model, models } from "mongoose";

const experienceSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 1000,
    },
    employmentType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Contract", "Freelance", "Internship"],
    },
    location: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    locationType: {
      type: String,
      required: true,
      enum: ["On-site", "Hybrid", "Remote"],
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      default: null,
    },
    currentlyWorking: {
      type: Boolean,
      default: false,
    },
    skills: {
      type: [String],
      required: true,
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "At least one skill is required",
      },
    },
    responsibilities: {
      type: [String],
      required: true,
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "At least one responsibility is required",
      },
    },
    logo: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

const Experience = models.Experience || model("Experience", experienceSchema);

export default Experience;
