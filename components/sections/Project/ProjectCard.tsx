/** @format */

"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProjectType } from "@/types";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='group relative h-full'>
      {/* Subtle border accent */}
      <div className='absolute -inset-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm' />

      <div className='relative flex flex-col h-full rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl'>
        {/* Subtle overlay on hover */}
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/5' />

        {/* Minimal particles */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-1/4 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl' />
          <div className='absolute bottom-1/4 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl' />
        </div>

        {/* Image with hover effect */}
        <Link
          href={`/projects/${project._id}`}
          className='relative block w-full h-64 overflow-hidden group/image'>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className='object-cover transition-all duration-700 group-hover/image:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500' />

          {/* Quick view badge */}
          <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-md rounded-lg px-3 py-1.5 text-xs font-mono text-white opacity-0 group-hover/image:opacity-100 transition-all duration-500 translate-y-2 group-hover/image:translate-y-0'>
            Quick View
          </div>
        </Link>

        {/* Content */}
        <div className='relative z-10 flex flex-col flex-grow p-6 space-y-4'>
          {/* Category badge - monochrome */}
          <div className='flex items-center gap-2'>
            <div className='px-2 py-1 rounded-md bg-white/5 border border-white/10'>
              <span className='text-xs font-mono text-gray-400'>
                Featured Project
              </span>
            </div>
          </div>

          {/* Title with subtle hover effect */}
          <div>
            <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2'>
              {project.title}
            </h3>
            <div className='h-px w-12 bg-white/20 group-hover:w-24 transition-all duration-500 mb-3' />
            <p className='text-gray-400 leading-relaxed line-clamp-3'>
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div className='space-y-2 mt-auto'>
            <div className='text-xs font-mono text-gray-500 uppercase tracking-wider'>
              Technologies
            </div>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  className='bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-default backdrop-blur-sm'>
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge className='bg-white/5 text-gray-400 border border-white/10'>
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Action links */}
          <div className='flex items-center gap-4 pt-4 mt-2 border-t border-white/10'>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target='_blank'
                className='group/link inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300'>
                <span className='text-sm font-medium'>Live Demo</span>
                <ExternalLink className='w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1' />
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target='_blank'
                className='group/link inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300'>
                <span className='text-sm font-medium'>Source</span>
                <Github className='w-4 h-4 transition-transform duration-300 group-hover/link:rotate-12' />
              </Link>
            )}

            <Link
              href={`/projects/${project._id}`}
              className='ml-auto group/link inline-flex items-center gap-1 text-gray-400 hover:text-white transition-all duration-300'>
              <span className='text-sm'>Details</span>
              <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
