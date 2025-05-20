/** @format */

import ExperienceGrid from "@/components/sections/ExperienceGrid";
import { Eduction } from "@/components/sections/Eduction";
import Heading from "@/components/sections/Heading";
import { Hero } from "@/components/sections/Hero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Heading heading='01. Builts' />
      <ProjectsGrid />
      <Heading heading='02. Experience' />
      <ExperienceGrid />
      <Heading heading='03. Eduction' />
      <Eduction />
    </div>
  );
}
