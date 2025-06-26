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
      className={`min-h-[320px] border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-stretch ${
        isEven(index) ? "bg-white" : "bg-zinc-100"
      }`}>
      {/* Image Section - 30% */}
      <Link href={`projects/${project._id}`} className='w-full md:w-[30%]'>
        <div className='h-full w-full bg-muted relative aspect-square md:aspect-auto'>
          <Image
            src={project.coverImage}
            alt={project.title}
            className='w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105'
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
          <h3 className='font-bold text-xl mb-2'>{project.title}</h3>
          <p className='text-muted-foreground mb-4 line-clamp-3'>
            {project.description}
          </p>

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
              className='text-sm font-medium text-primary hover:underline'>
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target='_blank'
              className='text-sm font-medium text-primary hover:underline'>
              View Code
            </Link>
          )}
          <Link
            href={`/projects/${project._id}`}
            className='text-sm font-medium text-primary hover:underline ml-auto'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
