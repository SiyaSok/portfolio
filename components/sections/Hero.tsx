/** @format */

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full opacity-20'>
          {/* Animated grid background */}
          <div className='absolute inset-0 opacity-20 bg-[size:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]'></div>

          {/* Floating animated circles */}
          <div className='absolute top-1/8 left-1/2 w-24 h-24 rounded-full bg-white opacity-10 mix-blend-screen animate-float1'></div>
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
            Hi, I&lsquo;m
            <span className='text-primary-300'> Siyanda Sokhela</span>
          </h1>
          <p className='text-xl text-gray-300 mb-8'>
            Front-End Developer creating beautiful, responsive web experiences
          </p>
          <div className='flex gap-4 justify-center'>
            <Button
              asChild
              className='bg-white text-indigo-900 hover:bg-gray-100'>
              <Link href='#projects'>View My Work</Link>
            </Button>
            <Button
              variant='outline'
              asChild
              className='bg-white text-indigo-900 hover:bg-gray-100'>
              <Link href='http://localhost:3000/resume.pdf' target='_blank'>
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
