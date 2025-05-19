/** @format */

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProjectType } from "@/types";
import Image from "next/image";
interface ProjectCardProps {
  project: ProjectType;
}
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='border rounded-lg overflow-hidden hover:shadow-lg transition-shadow'>
      <div className='h-78 bg-muted overflow-hidden'>
        <Image
          src={project.coverImage}
          alt={project.title}
          className='w-full h-full object-cover'
          height={0}
          width={0}
          sizes='100vw'
        />
      </div>
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
            href={`/projects/${project.slug}`}
            className='text-sm font-medium text-primary hover:underline ml-auto'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
