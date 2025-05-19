/** @format */

import { ProjectCard } from "@/components/sections/ProjectCard";
import connectDB from "@/lib/database/connection";
import Project from "@/lib/database/models/projectModel";

export async function ProjectsGrid() {
  await connectDB();

  const filteredProjects = await Project.find();

  return (
    <section className='min-h-screen flex items-center justify-center mt-8'>
      <div className="className='container-xl lg:container m-auto px-4 py-6'">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {filteredProjects.map((pro) => (
            <ProjectCard key={pro._id.toString()} project={pro} />
          ))}
        </div>
      </div>
    </section>
  );
}
