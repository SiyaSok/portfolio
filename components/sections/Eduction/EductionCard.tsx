/** @format */

import { EductionType } from "@/types";
import { Badge } from "@/components/ui/badge";

type Props = {
  eduction: EductionType;
  index: number;
};

export function EductionCard({ eduction }: Props) {
  return (
    <div className='relative pl-10 group'>
      {/* Timeline Dot - monochrome */}
      <div className='absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-white/60 shadow-lg' />

      {/* Card */}
      <div className='p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden'>
        {/* Subtle Glow Hover - monochrome */}
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5 blur-2xl' />

        {/* Content */}
        <div className='relative z-10'>
          {/* Badge */}
          <Badge
            variant='outline'
            className='mb-3 text-gray-300 border-white/20 bg-white/5'>
            Qualification
          </Badge>

          {/* Title */}
          <h3 className='text-xl font-semibold text-white mb-1'>
            {eduction.qualification}
          </h3>

          {/* College */}
          <p className='text-sm text-gray-400'>{eduction.college}</p>

          {/* Location */}
          <p className='text-xs text-gray-500 mt-1'>{eduction.location}</p>

          {/* Dates */}
          <p className='text-sm text-gray-400 mt-3 pt-2 border-t border-white/10 inline-block'>
            {new Date(eduction.startDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}{" "}
            -{" "}
            {eduction.endDate
              ? new Date(eduction.endDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })
              : "Present"}
          </p>
        </div>
      </div>
    </div>
  );
}
