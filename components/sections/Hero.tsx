/** @format */

// import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileCode, FolderGit2 } from "lucide-react";
export function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black relative '>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full opacity-20'>
          {/* Animated grid background */}
          <div className='absolute inset-0 opacity-20 bg-[size:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]'></div>

          {/* Floating animated circles */}
          <div className='absolute top-1/8 left-1/2 w-24 h-24 rounded-full bg-white opacity-10 mix-blend-difference animate-float1'></div>
          <div className='absolute top-1/4 left-1/2 w-30 h-30 rounded-full bg-white opacity-10 mix-blend-screen animate-float2'></div>
          <div className='absolute top-1/4 left-1/2 w-64 h-64 rounded-full bg-white opacity-10 mix-blend-screen animate-float3'></div>
          <div className='absolute bottom-1/4 left-1/2 w-30 h-30 rounded-full bg-white opacity-10 mix-blend-screen animate-float3'></div>
          <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-10 mix-blend-screen animate-float1'></div>
          <div className='absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-white opacity-10 mix-blend-screen animate-float2'></div>
          <div className='absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-white opacity-10 mix-blend-screen animate-float2'></div>
          <div className='absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-white opacity-10 mix-blend-screen animate-float3'></div>
          <div className='absolute bottom-1/4 left-1/8 w-60 h-60 rounded-full bg-white opacity-10 mix-blend-screen animate-float1'></div>
          <div className='absolute bottom-1/8 right-1/8 w-34 h-34 rounded-full bg-white opacity-10 mix-blend-screen animate-float2'></div>
          <div className='absolute bottom-1/2 left-1/8 w-60 h-60 rounded-full bg-white opacity-20 mix-blend-screen animate-float2'></div>
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-white'>
            <span className='text-primary-300'>Siyanda Sokhela</span>
          </h1>
          <p className='text-xl text-gray-300 mb-4'>
            Front-End Developer creating beautiful, responsive web experiences
          </p>
          <div className='flex gap-8 justify-center mt-8'>
            <Link
              href='/resume_.pdf'
              className=' font-semibold text-white bg-primary-500 hover:bg-white hover:text-black  transition-colors flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-500 hover:border-primary-600'>
              <FileCode className='w-5 h-5' />
              Resume
            </Link>
            <Link
              href='#projects'
              className=' font-semibold text-white bg-primary-500 hover:bg-white hover:text-black transition-colors flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-500 hover:border-primary-600'>
              <FolderGit2 className='w-5 h-5' />
              Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Floating down arrow icon */}
      <div className='absolute bottom-4 md:bottom-2 left-1/2 transform -translate-x-1/2 z-20 animate-bounce'>
        <Link href='#projects' className='block'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-white opacity-80 hover:opacity-100 transition-opacity'>
            <path d='M12 5v14M19 12l-7 7-7-7' />
          </svg>
        </Link>
      </div>
    </section>
  );
}
