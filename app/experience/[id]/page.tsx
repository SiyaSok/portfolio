/** @format */

import connectDB from "@/lib/database/connection";
import Experience from "@/lib/database/models/experienceModel";
import Image from "next/image";
import Link from "next/link";

const ExperienceDisplayPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;

  await connectDB();

  const experience = await Experience.findById(id);

  return (
    <div className='container mx-auto px-4 py-12'>
      {/* Back button */}
      <Link
        href='/'
        className='inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6'>
        ← Go Back
      </Link>
      <div className='mb-8 p-6 bg-white rounded-lg shadow-md'>
        <div className='flex flex-col md:flex-row justify-between gap-4 mb-4'>
          <div className='flex items-start gap-4'>
            {experience.logo && (
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                className='w-16 h-auto object-contain'
                height={0}
                width={0}
                sizes='100vw'
              />
            )}
            <div>
              <h3 className='text-xl font-bold text-gray-800'>
                {experience.company}
              </h3>
              <p className='text-lg text-gray-600'>{experience.role}</p>
            </div>
          </div>
          <div className='text-right'>
            <p className='text-gray-500'>{experience.employmentType}</p>
            <p className='text-gray-500'>
              {experience.location} ({experience.locationType})
            </p>
            <p className='text-gray-500'>
              {new Date(experience.startDate).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}{" "}
              -
              {experience.currentlyWorking
                ? " Present"
                : ` ${new Date(experience.endDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}`}
            </p>
          </div>
        </div>

        <p className='text-gray-700 mb-4'>{experience.description}</p>

        <div className='mb-4'>
          <h4 className='font-semibold text-gray-800 mb-2'>Skills:</h4>
          <ul className='flex flex-wrap gap-2'>
            {experience.skills.map((skill: string, index: number) => (
              <li
                key={index}
                className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className='mb-4'>
          <h4 className='font-semibold text-gray-800 mb-2'>
            Responsibilities:
          </h4>
          <ul className='list-disc pl-5 space-y-1'>
            {experience.responsibilities.map(
              (responsibility: string, index: number) => (
                <li key={index} className='text-gray-700'>
                  {responsibility}
                </li>
              )
            )}
          </ul>
        </div>

        {experience.website && (
          <a
            href={experience.website}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>
            Visit Company Website
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceDisplayPage;
