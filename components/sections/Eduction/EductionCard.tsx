/** @format */

import { Badge } from "@/components/ui/badge";

import { EductionType } from "@/types";

type EductionCardProps = {
  eduction: EductionType;
  index: number;
};

export async function EductionCard({ eduction, index }: EductionCardProps) {
  function isEven(num: number) {
    return num % 2 === 0;
  }

  return (
    <div
      key={index}
      className={`group relative h-auto md:h-62 overflow-hidden rounded-lg border border-muted shadow-sm hover:drop-shadow-accent transition-shadow duration-300 
    ${
      isEven(index)
        ? "bg-white border-muted text-black"
        : " bg-gradient-to-br from-black via-zinc-900 to-black text-white"
    }`}>
      {/* Project Card */}
      <div className='p-6 flex flex-col h-full relative justify-center'>
        <div className='flex flex-col  md:flex-row gap-6'>
          {/* Project Content */}
          <div className='flex-1'>
            <div className='mb-2'>
              <Badge
                variant='outline'
                className={`${
                  isEven(index) ? "text-primary " : " bg-gray-100"
                }`}>
                Qaulification
              </Badge>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2'>
              {eduction.qaulification}
            </h3>
            {/* <p className='text-sm mb-3'>{project.description}</p> */}
            <p className='text-sm mb-3'>{eduction.collage}</p>
            <p className='text-sm mb-3'>{eduction.location}</p>
            <p className='text-sm mb-3'>
              {new Date(eduction.startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}{" "}
              -{" "}
              {eduction.endDate
                ? new Date(eduction.endDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })
                : "Present"}
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />
    </div>
  );
}
