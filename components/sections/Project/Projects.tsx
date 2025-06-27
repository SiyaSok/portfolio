/** @format */

import { ProjectCard } from "./ProjectCard";
import { getProjects } from "@/lib/actions/project-actions";

export async function Projects() {
  const filteredProjects = await getProjects();
  return (
    <section
      id='projects'
      className='min-h-screen flex items-center justify-center'>
      <div className='container-xl lg:container m-auto px-4 '>
        <div className='grid grid-cols-1 space-y-18 '>
          {filteredProjects.map((pro, i) => (
            <ProjectCard key={pro._id.toString()} project={pro} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
