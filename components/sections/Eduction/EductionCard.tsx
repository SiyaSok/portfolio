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
      {/* Timeline Dot */}
      <div className='absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg' />

      {/* Card */}
      <div className='p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-white/20 transition relative overflow-hidden'>
        {/* Glow Hover */}
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-500/10 to-blue-500/10 blur-2xl' />

        {/* Content */}
        <div className='relative z-10'>
          {/* Badge */}
          <Badge
            variant='outline'
            className='mb-3 text-gray-300 border-white/20'>
            Qualification
          </Badge>

          {/* Title */}
          <h3 className='text-xl font-semibold text-white'>
            {eduction.qaulification}
          </h3>

          {/* College */}
          <p className='text-sm text-gray-400 mt-1'>{eduction.collage}</p>

          {/* Location */}
          <p className='text-xs text-gray-500 mt-1'>{eduction.location}</p>

          {/* Dates */}
          <p className='text-sm text-gray-400 mt-3'>
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
