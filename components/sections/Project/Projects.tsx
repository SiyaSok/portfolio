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
      <div className='absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/20 via-indigo-600/20 to-blue-600/20 blur-[140px] rounded-full animate-pulse' />
      <div className='absolute bottom-[-150px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 blur-[120px] rounded-full animate-pulse animation-delay-1000' />

      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />

      <div className='relativecontainer-xl lg:container m-auto  py-6 px-6'>
        <div className='mb-12'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm'>
            <div className='w-2 h-2 rounded-full bg-indigo-500 animate-pulse' />
            <span className='text-xs font-mono text-indigo-400'>
              EXPLORE MY WORK
            </span>
          </div>
          <h2 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent'>
            Featured Projects
          </h2>
          <p className='text-gray-400 mt-4 max-w-2xl'>
            A curated selection of my recent work and personal projects that
            showcase my passion for building exceptional digital experiences.
          </p>
        </div>

        <div className='space-y-12'>
          {projects.map((project: ProjectType, i: number) => (
            <div
              key={project._id.toString()}
              className='animate-in slide-in-from-bottom-8 duration-700 delay-'
              style={{ animationDelay: `${i * 150}ms` }}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
