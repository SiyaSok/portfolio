/** @format */

import { getEduction } from "@/lib/actions/eduction.actions";
import connectDB from "@/lib/database/connection";
import { EductionCard } from "./EductionCard";

export async function Eduction() {
  await connectDB();
  const education = await getEduction();

  if (!Array.isArray(education) || education.length === 0) {
    return (
      <div className='text-center text-gray-400'>
        No education data available.
      </div>
    );
  }

  return (
    <section
      id='education'
      className='relative py-24 bg-black text-white overflow-hidden'>
      {/* Subtle Glow Background - monochrome */}
      <div className='absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full' />

      <div className='relative container-xl lg:container m-auto px-4 py-6'>
        {/* Section Header */}
        <div className='mb-12'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm'>
            <div className='w-2 h-2 rounded-full bg-white/60' />
            <span className='text-xs font-mono text-gray-400'>
              ACADEMIC JOURNEY
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>
            Qualifications
          </h2>
          <p className='text-gray-400 mt-4 max-w-2xl'>
            My academic journey and professional certifications that have shaped
            my expertise.
          </p>
        </div>

        {/* Timeline Line */}
        <div className='relative border-l border-white/10 ml-4 space-y-8'>
          {education.map((edu, index) => (
            <EductionCard key={edu._id} eduction={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
