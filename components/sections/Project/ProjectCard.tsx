/** @format */

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProjectType } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export async function ProjectCard({ index, project }: ProjectCardProps) {
  function isEven(num: number) {
    return num % 2 === 0;
  }

  return (
    <div
      className={`h-auto md:min-h-72 border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-stretch ${
        isEven(index)
          ? "bg-white"
          : "bg-gradient-to-br from-black via-zinc-900 to-black text-white"
      }`}>
      {/* Image Section - 30% */}
      <Link href={`projects/${project._id}`} className='w-full md:w-[30%]'>
        <div className='h-52 md:h-72 w-full bg-muted relative aspect-square md:aspect-auto'>
          <Image
            src={project.coverImage}
            alt={project.title}
            // className='w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105'
            className='w-full h-52 md:h-78 object-cover  rounded-t-2xl md:rounded-l-2xl'
            height={0}
            width={0}
            sizes='100vw'
            priority
          />
        </div>
      </Link>

      {/* Content Section - 70% */}
      <div className='p-6 flex flex-col justify-between w-full md:w-[70%]'>
        <div>
          <h2 className='font-bold text-2xl mb-2'>{project.title}</h2>
          <p className=' mb-4 line-clamp-3'>{project.description}</p>

          <div className='flex flex-wrap gap-2 mb-4'>
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                variant='secondary'
                className={`${isEven(index) ? "" : "bg-white text-black"}`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className='flex flex-wrap items-center gap-4 mt-4'>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target='_blank'
              className='text-sm font-medium hover:underline'>
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target='_blank'
              className='text-sm font-medium  hover:underline'>
              View Code
            </Link>
          )}
          <Link
            href={`/projects/${project._id}`}
            className='text-sm font-medium hover:underline ml-auto'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
