/** @format */

import { Eduction } from "@/components/sections/Eduction/Eduction";
import Experiences from "@/components/sections/Experience/Experiences";
import Heading from "@/components/sections/Heading";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Project/Projects";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Heading heading='' />
      <Projects />
      <Heading heading='' />
      <Experiences />
      <Heading heading='' />
      <Eduction />
    </div>
  );
}
