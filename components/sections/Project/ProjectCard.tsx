/** @format */

"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProjectType } from "@/types";
import Image from "next/image";
// import { useState } from "react";
import { ArrowUpRight, Github, Sparkles, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='group relative'
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      <div className='absolute -inset-[1px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm' />

      <div className='relative grid md:grid-cols-2 gap-8 p-8 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10'>
        {/* Animated gradient overlay on hover */}
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-indigo-600/5 via-transparent to-blue-600/5' />

        {/* Floating particles effect */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-1/4 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-1/4 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000' />
        </div>

        {/* 🖼 Image with enhanced hover effect */}
        <Link
          href={`/projects/${project._id}`}
          className='relative w-full h-72 md:h-full min-h-[300px] overflow-hidden rounded-xl group/image'>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className='object-cover transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-1'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500' />

          {/* Quick view badge */}
          <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-md rounded-lg px-3 py-1.5 text-xs font-mono text-white opacity-0 group-hover/image:opacity-100 transition-all duration-500 translate-y-2 group-hover/image:translate-y-0'>
            <Sparkles className='inline w-3 h-3 mr-1' />
            Quick View
          </div>
        </Link>

        {/* 📄 Content with enhanced styling */}
        <div className='relative z-10 flex flex-col justify-between space-y-6'>
          {/* Category badge */}
          <div className='flex items-center gap-2'>
            <div className='px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20'>
              <span className='text-xs font-mono text-indigo-400'>
                Featured Project
              </span>
            </div>
            {project.featured && (
              <Sparkles className='w-4 h-4 text-yellow-400' />
            )}
          </div>

          {/* Title with hover effect */}
          <div>
            <h3 className='text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300'>
              {project.title}
            </h3>
            <div className='h-px w-12 bg-gradient-to-r from-indigo-500 to-transparent group-hover:w-24 transition-all duration-500 mb-4' />
            <p className='text-gray-400 leading-relaxed'>
              {project.description}
            </p>
          </div>

          {/* Tech stack with better styling */}
          <div className='space-y-3'>
            <div className='text-xs font-mono text-gray-500 uppercase tracking-wider'>
              Technologies
            </div>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.slice(0, 6).map((tech) => (
                <Badge
                  key={tech}
                  className='bg-white/5 text-gray-300 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 cursor-default backdrop-blur-sm'>
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 6 && (
                <Badge className='bg-white/5 text-gray-400 border border-white/10'>
                  +{project.technologies.length - 6}
                </Badge>
              )}
            </div>
          </div>

          {/* Action links with icons and animations */}
          <div className='flex items-center gap-6 pt-4'>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target='_blank'
                className='group/link inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-all duration-300'>
                <span className='text-sm font-medium'>Live Demo</span>
                <ExternalLink className='w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1' />
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target='_blank'
                className='group/link inline-flex items-center gap-2 text-blue-400 hover:text-white transition-all duration-300'>
                <span className='text-sm font-medium'>Source Code</span>
                <Github className='w-4 h-4 transition-transform duration-300 group-hover/link:rotate-12' />
              </Link>
            )}

            <Link
              href={`/projects/${project._id}`}
              className='ml-auto group/link inline-flex items-center gap-1 text-gray-400 hover:text-white transition-all duration-300'>
              <span className='text-sm'>View Details</span>
              <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
