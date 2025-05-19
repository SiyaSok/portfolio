/** @format */

import { Badge } from "@/components/ui/badge";
import Project from "@/lib/database/models/projectModel";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const ProjectPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  const project = await Project.findById(id);

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='max-w-4xl mx-auto'>
        {/* Back button */}
        <Link
          href='/'
          className='inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6'>
          ← Go Back
        </Link>

        {/* Project header */}
        <div className='mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold mb-2'>
            {project.title}
          </h1>
          <p className='text-xl text-muted-foreground'>{project.description}</p>

          {/* Project dates */}
          <div className='flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground'>
            <div>
              <span className='font-medium'>Started:</span>{" "}
              {format(project.startDate, "MMMM d, yyyy")}
            </div>
            {project.endDate && (
              <div>
                <span className='font-medium'>Completed:</span>{" "}
                {format(project.endDate, "MMMM d, yyyy")}
              </div>
            )}
            <div>
              <span className='font-medium'>Duration:</span>{" "}
              {calculateDuration(project.startDate, project.endDate)}
            </div>
          </div>
        </div>

        {/* Cover image */}
        <div className='rounded-lg overflow-hidden mb-8'>
          <Image
            src={project.coverImage}
            alt={project.title}
            className='w-full h-auto object-cover'
            height={0}
            width={0}
            sizes='100vw'
          />
        </div>

        {/* Technologies */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Technologies Used</h2>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant='outline' className='text-sm'>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project content */}
        <div className='prose prose-sm sm:prose dark:prose-invert max-w-none mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Project Details</h2>
          <p className='whitespace-pre-line'>{project.content}</p>
        </div>

        {/* Links */}
        <div className='flex flex-wrap gap-4'>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors'>
              Visit Live Site
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-4 py-2 border border-input bg-background rounded-md hover:bg-accent hover:text-accent-foreground transition-colors'>
              View Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

// Helper function to calculate duration
function calculateDuration(startDate: Date, endDate?: Date): string {
  if (!endDate) return "Ongoing";

  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""}`;
  }

  const days = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return `${days} day${days > 1 ? "s" : ""}`;
}
