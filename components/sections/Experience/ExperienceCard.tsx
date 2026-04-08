/** @format */

import { format } from "date-fns";
import { ExperienceType } from "@/types";
import Image from "next/image";

interface ExperienceCardProps {
  experience: ExperienceType;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className='group relative p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-white/20 transition overflow-hidden'>
      {/* Glow Hover Effect */}
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-2xl' />

      {/* Logo */}
      {experience.logo && (
        <div className='w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-white border border-white/10'>
          <Image
            src={experience.logo}
            alt={experience.company}
            width={45}
            height={45}
            className='object-contain'
          />
        </div>
      )}

      {/* Role */}
      <h3 className='text-lg font-semibold text-white'>{experience.role}</h3>

      {/* Company */}
      <p className='text-sm text-gray-400 mt-1'>
        {experience.company} • {experience.employmentType}
      </p>

      {/* Dates */}
      <p className='text-xs text-gray-500 mt-2'>
        {format(new Date(experience.startDate), "MMM yyyy")} -{" "}
        {experience.currentlyWorking
          ? "Present"
          : format(new Date(experience.endDate!), "MMM yyyy")}
      </p>

      {/* Description */}
      <p className='text-sm text-gray-400 mt-4 line-clamp-3'>
        {experience.description}
      </p>

      {/* Skills */}
      <div className='flex flex-wrap gap-2 mt-4'>
        {experience.skills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className='text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300'>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
