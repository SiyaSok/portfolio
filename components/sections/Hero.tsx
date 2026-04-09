/** @format */

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FileCode,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code2,
  Layers,
} from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className='relative min-h-screen flex items-center bg-black overflow-hidden px-6'>
      {/* Subtle gradient background - single color tone */}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className='absolute w-[800px] h-[800px] bg-white/5 blur-[140px] rounded-full transition-transform duration-1000 ease-out'
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className='absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full'
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
          }}
        />

        {/* Subtle line accents */}
        <div className='absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent' />
        <div className='absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent' />
      </div>

      {/* Minimal grid overlay */}
      <div
        className='absolute inset-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]'
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Vignette effect */}
      <div className='absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80 pointer-events-none' />

      {/* Content Wrapper */}
      <div className='relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center'>
        {/* LEFT SIDE */}
        <div className='space-y-8 animate-in slide-in-from-left-8 duration-700'>
          {/* Status badge - monochrome */}
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm'>
            <div className='relative'>
              <div className='w-2 h-2 rounded-full bg-white/60' />
              <div className='absolute inset-0 w-2 h-2 rounded-full bg-white/40 animate-ping' />
            </div>
            <span className='text-xs font-mono text-gray-400 tracking-wider'>
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Title - minimal gradient accent */}
          <div className='space-y-2'>
            <h1 className='text-4xl lg:text-6xl font-bold text-white leading-[1.1]'>
              Siyanda{" "}
              <span className='bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent'>
                Sokhela.
              </span>
            </h1>

            {/* Subtitle */}
            <div className='mt-4'>
              <p className='text-xl text-gray-400 font-mono'>
                <span className='text-gray-300'>&gt;</span>
                <span className='animate-pulse'>_</span>
                <span className='ml-2'>
                  creative developer / problem solver
                </span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className='text-lg text-gray-400 max-w-xl leading-relaxed'>
            I craft{" "}
            <span className='text-white font-medium'>
              immersive digital experiences
            </span>{" "}
            that combine beautiful design with powerful performance.
            Specializing in React, Next.js, and modern web technologies.
          </p>

          {/* Buttons - simplified */}
          <div className='flex flex-wrap gap-4'>
            <Link
              href='#projects'
              className='group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg'>
              <span>View My Work</span>
              <Layers className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
            </Link>

            <Link
              href='/resume_.pdf'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105'>
              <FileCode className='w-5 h-5' />
              Download Resume
            </Link>
          </div>

          {/* Social Icons */}
          <div className='flex gap-4 pt-4'>
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:hello@siyanda.dev", label: "Email" },
              { icon: Code2, href: "#", label: "LeetCode" },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target='_blank'
                className='group relative p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/15'>
                <social.icon className='w-5 h-5' />
                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
                  {social.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Profile Section */}
        <div className='relative flex justify-center items-center'>
          {/* Minimal rings - single color */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-spin-slow' />
            <div
              className='absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-spin-slow animation-delay-1000'
              style={{ animationDirection: "reverse" }}
            />
            <div className='absolute w-[200px] h-[200px] border border-white/5 rounded-full animate-spin-slow animation-delay-2000' />
          </div>

          {/* Subtle glow */}
          <div className='absolute w-[350px] h-[350px] bg-white/5 blur-3xl rounded-full' />

          {/* Main Image Container */}
          <div
            className='relative group'
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
              transition: "transform 0.3s ease-out",
            }}>
            {/* Image border */}
            <div className='absolute -inset-1 bg-white/20 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000' />

            {/* Profile Image */}
            <div className='relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-white/10 shadow-2xl'>
              <Image
                src='/unnamed.jpg'
                alt='Siyanda Sokhela'
                fill
                className='object-cover scale-110 group-hover:scale-105 transition-transform duration-700'
                priority
              />

              {/* Subtle overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            </div>

            {/* Tech stack badges - minimal */}
            <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/15'>
              <span className='text-xs font-mono text-gray-300'>React</span>
              <span className='text-xs text-gray-600'>•</span>
              <span className='text-xs font-mono text-gray-300'>Next.js</span>
              <span className='text-xs text-gray-600'>•</span>
              <span className='text-xs font-mono text-gray-300'>
                TypeScript
              </span>
              <span className='text-xs text-gray-600'>•</span>
              <span className='text-xs font-mono text-gray-300'>
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group'>
        <span className='text-xs text-gray-500 uppercase tracking-wider group-hover:text-gray-400 transition-colors duration-300'>
          Scroll Down
        </span>
        <div className='w-6 h-10 border border-white/20 rounded-full flex justify-center group-hover:border-white/40 transition-colors duration-300'>
          <div className='w-1 h-2 bg-white/30 rounded-full mt-2 animate-scroll-down group-hover:bg-white/50' />
        </div>
        <ArrowDown className='w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors duration-300 animate-bounce' />
      </div>
    </section>
  );
}
