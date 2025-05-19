/** @format */

import Experience from "@/lib/database/models/experienceModel";
import { ExperienceCard } from "./ExperienceCard";

const ExperienceGrid = async () => {
  const experiences = await Experience.find();

  return (
    <section className='flex items-center justify-center mt-8'>
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

export default ExperienceGrid;
