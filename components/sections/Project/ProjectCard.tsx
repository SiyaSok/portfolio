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
      className={`border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center md:gap-10 ${
        isEven(index) ? "" : "flex-row-reverse bg-zinc-100"
      }`}>
      <Link href={`projects/${project._id}`}>
        <div className='w-full bg-muted overflow-hidden'>
          <Image
            src={project.coverImage}
            alt={project.title}
            className='w-full object-contain grayscale hover:grayscale-0 transition duration-300 cursor-pointer'
            height={300}
            width={300}
          />
        </div>
      </Link>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
        <p className='text-muted-foreground mb-4 line-clamp-2'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.map((tech) => (
            <Badge key={tech} variant='secondary'>
              {tech}
            </Badge>
          ))}
        </div>
        <div className='flex gap-3'>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target='_blank'
              className='text-sm font-medium text-primary hover:underline cursor-pointer'>
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target='_blank'
              className='text-sm font-medium text-primary hover:underline cursor-pointer'>
              View Code
            </Link>
          )}
          <Link
            href={`/projects/${project._id}`}
            className='text-sm font-medium text-primary hover:underline ml-auto cursor-pointer'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
