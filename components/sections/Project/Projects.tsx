/** @format */

import { ProjectType } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { getProjects } from "@/lib/actions/project-actions";

export async function Projects() {
  const projects = await getProjects();

  return (
    <section
      id='projects'
      className='relative py-32 bg-black text-white overflow-hidden'>
      {/* Subtle background accents - monochrome */}
      <div className='absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-[140px] rounded-full' />
      <div className='absolute bottom-[-150px] right-[-100px] w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full' />

      {/* Minimal grid overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />

      <div className='relative container-xl lg:container m-auto py-6 px-6'>
        <div className='mb-12'>
          {/* Status badge - monochrome */}
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm'>
            <div className='w-2 h-2 rounded-full bg-white/60 animate-pulse' />
            <span className='text-xs font-mono text-gray-400'>
              EXPLORE MY WORK
            </span>
          </div>

          {/* Title - subtle gradient */}
          <h2 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>
            Featured Projects
          </h2>
          <p className='text-gray-400 mt-4 max-w-2xl'>
            A curated selection of my recent work and personal projects that
            showcase my passion for building exceptional digital experiences.
          </p>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.map((project: ProjectType, i: number) => (
            <div
              key={project._id.toString()}
              className='animate-in slide-in-from-bottom-8 duration-700'
              style={{ animationDelay: `${i * 150}ms` }}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
