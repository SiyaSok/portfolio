/** @format */

import ExperienceGrid from "@/components/sections/ExperienceGrid";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import Heading from "@/components/sections/Heading";
import { Hero } from "@/components/sections/Hero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Heading heading='01. Some Things I have Built' />
      <ProjectsGrid />
      <Heading heading='03. Some Experience' />
      <ExperienceGrid />
      <FeaturedProjects />
    </div>
  );
}
