'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaRegMoon } from 'react-icons/fa';
import Bar from '@/components/Bar';
import { MdOutlineMenu } from 'react-icons/md';
import { IoIosSunny } from 'react-icons/io';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const themeClass = currentTheme === 'dark' ? 'dark' : 'light';
      document.documentElement.classList.add(themeClass);
      document.documentElement.classList.remove(currentTheme === 'dark' ? 'light' : 'dark');
    }
  }, [currentTheme]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center m-6 mt-6">

      <div className="flex items-center justify-between mt-8 ml-7 w-full md:w-auto">
        <Bar />
        <button onClick={toggleMenu} className="p-2 md:hidden ml-4">
          <MdOutlineMenu size={30} />
        </button>
      </div>

      <div
        className={`w-full md:w-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
          isMenuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        {/* big screen */}
        <ul className=" flex-col md:flex-row gap-6 md:gap-10 hidden md:flex">
          <li>
            <button onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>Home</button>
          </li>
          <li>
            <button onClick={() => window.scroll({ top: 600, left: 0, behavior: 'smooth' })}>About</button>
          </li>
          <li>
            <button onClick={() => window.scroll({ top: 1300, left: 0, behavior: 'smooth' })}>Projects</button>
          </li>
          <li>
            <button onClick={() => window.scroll({ top: 2000, left: 0, behavior: 'smooth' })}>Contact</button>
          </li>
        </ul>
{/* small screen */}
        <ul className="block flex-col md:flex-row space-y-4 md:gap-10 md:hidden">
          <li>
            <button onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>Home</button>
          </li>
          <li>
            <button onClick={() => window.scroll({ top: 1300, left: 0, behavior: 'smooth' })}>About</button>
          </li>
          <li>
            <button onClick={() => window.scroll({ top: 2950, left: 0, behavior: 'smooth' })}>Projects</button>
          </li>
          <li>
            <button onClick={() => window.scroll({ top: 4550, left: 0, behavior: 'smooth' })}>Contact</button>
          </li>
        </ul>
      </div>
      

      <div className="flex gap-7 mt-6 md:mt-0 items-center md:flex-row cursor-pointer">
        <div className="hidden md:flex gap-10">
          <a href="https://github.com/sangammgr88"><FaGithub size={30} /></a>
          <a href="https://x.com/SanGaM46re"><FaTwitter size={30} /></a>
          <a href="https://www.linkedin.com/in/sangam-magar-844aab260/"> <FaLinkedin size={30} /></a>
         
        </div>

        <div className="absolute -top-4 right-0 md:relative ">
  <button onClick={toggleTheme} className="relative bg-transparent rounded-full focus:outline-none p-4">
    <IoIosSunny
      className="absolute h-[2rem] w-[2rem] transition-all ease-in-out transform dark:rotate-180 dark:scale-0 dark:opacity-0 opacity-100"
      size={20} 
    />
    <FaRegMoon
      className="absolute transition-all duration-300 ease-in-out transform dark:rotate-0 dark:scale-100 dark:opacity-100 opacity-0"
      size={20} 
    />
  </button>
</div>

      </div>
    </div>
  );
};

export default Navbar;
