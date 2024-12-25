import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-[#181A2A] text-white py-6">
      <div className="container mx-auto px-4 sm:px-20 md:px-56">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-6 sm:space-y-0">
          {/* Navigation Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
            <Link href='/'>  <li>Home</li></Link>
            <Link href='/blogs'> <li>Blogs</li></Link>
            <Link href='/about'> <li>About Us</li></Link>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-3">Lets Connect!</h3>
           <Link href='https://www.linkedin.com/in/aftab-ahmed-755292304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <div className="flex justify-center items-center sm:justify-start space-x-4">
              <div className="hover:text-gray-400"><FaLinkedin  className='w-5 h-5'/></div>
              <p className='text-md'>Linkedin</p>
            </div></Link>
          </div>

          {/* Subscribe Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-3">Subscribe</h3>
            <form className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black"
              />
              <button className="px-4 py-2 bg-slate-500 hover:bg-slate-600 rounded-md text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
          © 2024 Blogify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
