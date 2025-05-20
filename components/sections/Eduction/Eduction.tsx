/** @format */

import { Badge } from "@/components/ui/badge";
import { getEduction } from "@/lib/actions/eduction.actions";
import connectDB from "@/lib/database/connection";

export async function Eduction() {
  await connectDB();
  const education = await getEduction();
  return (
    <section className=''>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-8'>
          {education.map((project, index) => (
            <div key={index} className='group relative'>
              {/* Project Card */}
              <div className='relative z-10 p-6 md:p-8 bg-background border rounded-lg shadow-sm group-hover:shadow-md transition-shadow'>
                <div className='flex flex-col md:flex-row gap-6'>
                  {/* Project Content */}
                  <div className='flex-1'>
                    <div className='mb-2'>
                      <Badge variant='outline' className='text-primary'>
                        Qaulification
                      </Badge>
                    </div>
                    <h3 className='text-xl md:text-2xl font-bold mb-2'>
                      {project.qaulification}
                    </h3>
                    <p className='text-sm mb-3'>{project.description}</p>
                    <p className='text-sm mb-3'>{project.collage}</p>
                    <p className='text-sm mb-3'>{project.location}</p>
                    <p className='text-sm mb-3'>
                      {new Date(project.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}{" "}
                      -{" "}
                      {project.endDate
                        ? new Date(project.endDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                            }
                          )
                        : "Present"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
