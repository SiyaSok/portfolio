/** @format */

import { getEduction } from "@/lib/actions/eduction.actions";
import connectDB from "@/lib/database/connection";
import { EductionCard } from "./EductionCard";

export async function Eduction() {
  await connectDB();
  const education = await getEduction();
  if (!Array.isArray(education) || education.length === 0) {
    return <div className='text-center'>No education data available.</div>;
  }
  return (
    <section className='relative py-24 bg-black text-white overflow-hidden '>
      {/* 🌈 Glow Background */}
      <div className='absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[140px] rounded-full' />

      <div className='relative container-xl lg:container m-auto px-4 py-6'>
        {/* Title */}
        {/* <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          03. Qualifications
        </h2> */}
        <p className='text-gray-400 mb-16'>
          My academic journey and certifications.
        </p>

        {/* Timeline Line */}
        <div className='relative border-l border-white/10 ml-4 space-y-12'>
          {education.map((edu, index) => (
            <EductionCard key={edu._id} eduction={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
