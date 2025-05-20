/** @format */

// components/cards/ExperienceCard.tsx
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { ExperienceType } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  //   const duration = calculateDuration(
  //     experience.startDate,
  //     // experience.endDate,
  //     experience.currentlyWorking
  //   );

  function isEven(num: number) {
    return num % 2 === 0;
  }

  return (
    <div
      className={`border rounded-lg p-6 hover:shadow-md transition-shadow ${
        isEven(index) ? "bg-white" : "flex-row-reverse bg-zinc-100"
      }`}>
      <Link href={`/experience/${experience._id}`}>
        <div className='flex flex-col sm:flex-row gap-4'>
          {experience.logo && (
            <div className='w-16 h-16 flex-shrink-0 bg-white rounded-lg border flex items-center justify-center overflow-hidden'>
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                className='w-12 h-12 object-contain'
                height={0}
                width={0}
                sizes='100vw'
              />
            </div>
          )}

          <div className='flex-1'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
              <div>
                <h3 className='text-lg font-semibold'>{experience.role}</h3>
                <p className='text-muted-foreground'>
                  {experience.company} • {experience.employmentType}
                </p>
              </div>
              {experience.featured && (
                <Badge variant='secondary' className='w-fit'>
                  Featured
                </Badge>
              )}
            </div>

            <div className='mt-2 text-sm text-muted-foreground'>
              {format(experience.startDate, "MMM yyyy")} -{" "}
              {experience.currentlyWorking
                ? "Present"
                : format(experience.endDate!, "MMM yyyy")}{" "}
              • {""}
            </div>

            <p className='mt-3 text-sm line-clamp-2'>
              {experience.description}
            </p>

            <div className='mt-4 flex flex-wrap gap-2'>
              {experience.skills.slice(0, 10).map((skill) => (
                <Badge key={skill} variant='outline' className='text-xs'>
                  {skill}
                </Badge>
              ))}
              {experience.skills.length > 10 && (
                <Badge variant='outline' className='text-xs'>
                  +{experience.skills.length - 10} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
