/** @format */

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Briefcase,
  User,
  FolderGit2,
  GraduationCap,
  Mail,
} from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#projects", icon: FolderGit2 },
    { name: "Experience", href: "#experiences", icon: GraduationCap },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}>
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='group relative flex items-center gap-2 text-white font-bold text-xl'>
            <div className='w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300'>
              <Briefcase className='w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300' />
            </div>
            <span className='bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
              S.S.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='group relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium'>
                <span className='relative z-10'>{link.name}</span>
                <span className='absolute -bottom-1 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300' />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <Link
              href='/resume_.pdf'
              className='inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300'>
              Resume
              <User className='w-4 h-4' />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/10 transition-all duration-300'>
            {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className='flex flex-col p-6 space-y-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 py-2 text-base'>
                <link.icon className='w-4 h-4' />
                <span>{link.name}</span>
              </Link>
            ))}
            <div className='pt-4 border-t border-white/10'>
              <Link
                href='/resume_.pdf'
                onClick={() => setIsOpen(false)}
                className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 py-2 text-base'>
                <User className='w-4 h-4' />
                <span>Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
