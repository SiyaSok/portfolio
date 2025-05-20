/** @format */

import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  link?: string;
}

export function FeaturedProjects() {
  const projects: Project[] = [
    {
      title: "Halcyon Theme",
      description:
        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm2, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      shortDescription:
        "A mobility club likes home for VS Code, Sublime Text, Atom, and more.",
      tags: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      link: "#",
    },
    // Add more projects here
  ];

  return (
    <section className='py-12 md:py-20'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-primary whitespace-nowrap'>
            03. Some Things I have Built
          </h2>
          <div className='w-full h-px bg-border' />
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='group relative'>
              {/* Project Card */}
              <div className='relative z-10 p-6 md:p-8 bg-background border rounded-lg shadow-sm group-hover:shadow-md transition-shadow'>
                <div className='flex flex-col md:flex-row gap-6'>
                  {/* Project Content */}
                  <div className='flex-1'>
                    <div className='mb-2'>
                      <Badge variant='outline' className='text-primary'>
                        Featured Project
                      </Badge>
                    </div>
                    <h3 className='text-xl md:text-2xl font-bold mb-2'>
                      {project.title}
                    </h3>
                    <p className='text-muted-foreground mb-4'>
                      {project.shortDescription}
                    </p>
                    <p className='text-sm mb-6'>{project.description}</p>

                    {/* Technologies */}
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant='secondary' className='text-xs'>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Image (placeholder) */}
                  <div className='hidden md:block w-48 h-48 bg-muted rounded-lg overflow-hidden'>
                    {/* Replace with actual image */}
                    <div className='w-full h-full flex items-center justify-center text-muted-foreground'>
                      Project Preview
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
