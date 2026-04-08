/** @format */

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FileCode,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  ArrowDown,
  Code2,
  Layers,
  Zap,
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

  // const floatingIcons = [
  //   { icon: "⚛️", x: "10%", y: "20%", delay: 0, size: "p-4", rotation: true },
  //   { icon: "🐍", x: "85%", y: "15%", delay: 0.3, size: "p-4", rotation: true },
  //   {
  //     icon: "🟦",
  //     x: "75%",
  //     y: "70%",
  //     delay: 0.6,
  //     size: "p-3",
  //     rotation: false,
  //   },
  //   {
  //     icon: "🟢",
  //     x: "15%",
  //     y: "75%",
  //     delay: 0.9,
  //     size: "p-3",
  //     rotation: false,
  //   },
  //   { icon: "📱", x: "90%", y: "45%", delay: 1.2, size: "p-3", rotation: true },
  //   { icon: "🎨", x: "5%", y: "50%", delay: 1.5, size: "p-3", rotation: true },
  // ];

  return (
    <section className='relative min-h-screen flex items-center bg-black overflow-hidden px-6'>
      {/* Animated gradient background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className='absolute w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/20 via-indigo-600/20 to-blue-600/20 blur-[140px] rounded-full transition-transform duration-1000 ease-out'
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className='absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 blur-[120px] rounded-full'
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
          }}
        />

        {/* Animated gradient lines */}
        <div className='absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent animate-pulse' />
        <div className='absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse animation-delay-1000' />
      </div>

      {/* Enhanced grid overlay with parallax */}
      <div
        className='absolute inset-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]'
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Vignette effect */}
      <div className='absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50 pointer-events-none' />

      {/* Floating tech icons with enhanced animations */}
      {/* {floatingIcons.map((item, idx) => (
        <div
          key={idx}
          className={`absolute hidden lg:flex items-center justify-center ${item.size} bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg`}
          style={{
            left: item.x,
            top: item.y,
            animation: `float ${3 + idx * 0.5}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
          }}>
          <span
            className={`text-xl ${item.rotation ? "animate-spin-slow" : ""}`}>
            {item.icon}
          </span>
        </div>
      ))} */}

      {/* Content Wrapper */}
      <div className='relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center'>
        {/* LEFT SIDE - Enhanced */}
        <div className='space-y-8 animate-in slide-in-from-left-8 duration-700'>
          {/* Status badge with pulse */}
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm'>
            <div className='relative'>
              <div className='w-2 h-2 rounded-full bg-green-500' />
              <div className='absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75' />
            </div>
            <span className='text-xs font-mono text-gray-300 tracking-wider'>
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Animated title */}
          <div className='space-y-2'>
            <h1 className='text-xl lg:text-6xl font-bold text-white leading-[1.1]'>
              Siyanda{" "}
              <span className='bg-gradient-to-r from-indigo-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent animate-gradient'>
                Sokhela.
              </span>
            </h1>

            {/* Typewriter effect subtitle */}
            <div className='mt-4'>
              <p className='text-xl text-gray-400 font-mono'>
                <span className='text-indigo-400'>&gt;</span>
                <span className='animate-pulse'>_</span>
                <span className='ml-2'>
                  creative developer / problem solver
                </span>
              </p>
            </div>
          </div>

          {/* Enhanced description */}
          <p className='text-lg text-gray-400 max-w-xl leading-relaxed'>
            I craft{" "}
            <span className='text-white font-medium'>
              immersive digital experiences
            </span>{" "}
            that combine beautiful design with powerful performance.
            Specializing in React, Next.js, and modern web technologies.
          </p>

          {/* Stats */}
          {/* <div className='flex gap-8 pt-4'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>3+</div>
              <div className='text-xs text-gray-500 uppercase tracking-wider'>
                Years Experience
              </div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>20+</div>
              <div className='text-xs text-gray-500 uppercase tracking-wider'>
                Projects Done
              </div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>100%</div>
              <div className='text-xs text-gray-500 uppercase tracking-wider'>
                Client Satisfaction
              </div>
            </div>
          </div> */}

          {/* Enhanced Buttons */}
          <div className='flex flex-wrap gap-4'>
            <Link
              href='#projects'
              className='group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25'>
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <span className='relative z-10'>View My Work</span>
              <Layers className='relative z-10 w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
            </Link>

            <Link
              href='/resume_.pdf'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105'>
              <FileCode className='w-5 h-5' />
              Download Resume
            </Link>
          </div>

          {/* Enhanced Social Icons */}
          <div className='flex gap-6 pt-4'>
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
                className='group relative p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10'>
                <social.icon className='w-5 h-5' />
                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
                  {social.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Enhanced Profile Section */}
        <div className='relative flex justify-center items-center'>
          {/* Animated rings */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='absolute w-[400px] h-[400px] border border-indigo-500/20 rounded-full animate-spin-slow' />
            <div
              className='absolute w-[300px] h-[300px] border border-blue-500/20 rounded-full animate-spin-slow animation-delay-1000'
              style={{ animationDirection: "reverse" }}
            />
            <div className='absolute w-[200px] h-[200px] border border-indigo-500/20 rounded-full animate-spin-slow animation-delay-2000' />
          </div>

          {/* Profile Glow Effect */}
          <div className='absolute w-[350px] h-[350px] bg-gradient-to-tr from-indigo-500 to-blue-500 blur-3xl opacity-20 rounded-full animate-pulse' />

          {/* Main Image Container with 3D tilt effect */}
          <div
            className='relative group'
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
              transition: "transform 0.3s ease-out",
            }}>
            {/* Image border gradient */}
            <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />

            {/* Profile Image */}
            <div className='relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl'>
              <Image
                src='/unnamed.jpg'
                alt='Siyanda Sokhela'
                fill
                className='object-cover scale-110 group-hover:scale-105 transition-transform duration-700'
                priority
              />

              {/* Overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            </div>

            {/* Tech stack badges that follow mouse */}
            <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/10'>
              <span className='text-xs font-mono text-indigo-400'>React</span>
              <span className='text-xs text-gray-500'>•</span>
              <span className='text-xs font-mono text-blue-400'>Next.js</span>
              <span className='text-xs text-gray-500'>•</span>
              <span className='text-xs font-mono text-indigo-400'>
                TypeScript
              </span>
            </div>
          </div>

          {/* Floating tech cards */}
          <div className='absolute -top-10 -right-10 bg-gradient-to-br from-zinc-900 to-black backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg animate-float'>
            <Zap className='w-6 h-6 text-yellow-400' />
          </div>
          <div className='absolute -bottom-10 -left-10 bg-gradient-to-br from-zinc-900 to-black backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg animate-float animation-delay-1000'>
            <Sparkles className='w-6 h-6 text-indigo-400' />
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group'>
        <span className='text-xs text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300'>
          Scroll Down
        </span>
        <div className='w-6 h-10 border-2 border-white/20 rounded-full flex justify-center group-hover:border-white/40 transition-colors duration-300'>
          <div className='w-1 h-2 bg-white/40 rounded-full mt-2 animate-scroll-down group-hover:bg-white/60' />
        </div>
        <ArrowDown className='w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300 animate-bounce' />
      </div>
    </section>
  );
}
