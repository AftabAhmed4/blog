'use client';

import React, { useState, useEffect } from 'react';
import ThemeToggle from './Themetogglr';
import Link from 'next/link';


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#181A2A] text-white z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-4 py-4 md:px-16 xl:px-56">
        {/* Hamburger for Mobile */}
        <button
  className="text-xl sm:hidden relative w-8 h-8"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {/* Hamburger Icon */}
  <div
    className={`w-5 h-1 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
  ></div>
  {/* Middle Bar */}
  <div
    className={`w-5 h-1 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
  ></div>
  {/* Bottom Bar */}
  <div
    className={`w-5 h-1 bg-white my-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
  ></div>
</button>



        {/* Logo */}
        <Link href="/" >
        <div className="text-xl font-bold">Blogify</div>
        </Link>

        {/* Theme Toggle Button */}
        <div className="sm:hidden">
          <ThemeToggle />
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden sm:flex gap-9 text-md font-medium cursor-pointer">
        <Link href='/'><li>Home</li></Link> 
        <Link href='/blogs'> <li>Blogs</li></Link> 
        <Link href='/about'>  <li>About Us</li></Link>
        </ul>

        {/* Theme Toggle for larger screens */}
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center bg-[#1F202F] sm:hidden">
          <ul className="w-full text-center">
            <Link href='/'> <li className="py-4 border-b border-gray-700 cursor-pointer " onClick={() => setIsMenuOpen(false)}>Home</li></Link>
            <Link href='/blogs'> <li className="py-4 border-b border-gray-700 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Blogs</li></Link>
            <Link href='/about'> <li className="py-4 cursor-pointer" onClick={() => setIsMenuOpen(false)}>About Us</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
