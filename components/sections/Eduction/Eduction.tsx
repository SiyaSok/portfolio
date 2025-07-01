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
    <section className=''>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {education.map((project, index) => (
            <EductionCard key={index} eduction={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
