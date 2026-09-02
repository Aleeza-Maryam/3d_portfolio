"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#00d4ff]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="text-xl font-bold">
          <span className="text-[#00d4ff]">A</span>
          <span className="text-white">leeza</span>
          <span className="text-[#7c3aed]">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-400 hover:text-[#00d4ff] transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00d4ff] transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/resume/AleezaMaryam_Resume.pdf"
          target="_blank"
          className="hidden md:block px-4 py-2 text-sm font-medium text-white border border-[#00d4ff]/30 rounded-full hover:bg-[#00d4ff]/10 transition-all"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#00d4ff]/10">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="text-gray-400 hover:text-[#00d4ff] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume/AleezaMaryam_Resume.pdf"
              target="_blank"
              className="px-4 py-2 text-center text-sm font-medium text-white border border-[#00d4ff]/30 rounded-full hover:bg-[#00d4ff]/10 transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}