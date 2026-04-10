/** @format */

import { getExperiences } from "@/lib/actions/experience.actions";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceType } from "@/types";

const Experiences = async () => {
  const experiences = await getExperiences();
  if (!experiences) {
    return (
      <section className='flex items-center justify-center py-8 md:py-15 bg-gradient-to-br from-black via-zinc-900 to-black'>
        <div className="className='container-xl lg:container m-auto px-4 py-6'">
          <div className='space-y-8'>
            <h1 className='text-white text-2xl'>No experiences found</h1>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section
      id='experiences'
      className='flex items-center justify-center py-8 md:py-15 bg-gradient-to-br from-black via-zinc-900 to-black'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <div className='mb-12'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm'>
            <div className='w-2 h-2 rounded-full bg-white/60' />
            <span className='text-xs font-mono text-gray-400'>
              WORKING JOURNEY
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>
            Experiences
          </h2>
          <p className='text-gray-400 mt-4 max-w-2xl'>
            My working journey, showcasing the roles and companies that have
            shaped my career in the tech industry. Each experience reflects my
            growth, skills, and the impact I&apos;ve made in various projects
            and teams.
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {experiences.map((experience: ExperienceType) => (
            <ExperienceCard
              key={experience._id.toString()}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
