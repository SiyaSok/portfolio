/** @format */

import { Hero } from "@/components/sections/Hero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export default async function Home() {
  return (
    <div>
      <Hero />
      <ProjectsGrid />
    </div>
  );
}
