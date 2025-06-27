/** @format */

import { getExperiences } from "@/lib/actions/experience.actions";
import { ExperienceCard } from "./ExperienceCard";

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
    <section className='flex items-center justify-center py-8 md:py-15 bg-gradient-to-br from-black via-zinc-900 to-black'>
      <div className="className='container-xl lg:container m-auto px-4 py-6'">
        <div className='space-y-8'>
          {experiences.map((experience) => (
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
