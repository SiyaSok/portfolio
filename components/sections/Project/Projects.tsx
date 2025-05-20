/** @format */

import { ProjectCard } from "./ProjectCard";
import { getProjects } from "@/lib/actions/project-actions";

export async function Projects() {
  const filteredProjects = await getProjects();
  return (
    <section
      id='projects'
      className='min-h-screen flex items-center justify-center py-8 md:py-15'>
      <div className="className='container-xl lg:container m-auto px-4 py-6'">
        <div className='grid grid-cols-1 gap-8'>
          {filteredProjects.map((pro, i) => (
            <ProjectCard key={pro._id.toString()} project={pro} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
