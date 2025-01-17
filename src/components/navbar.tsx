'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaRegMoon } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSunny } from 'react-icons/io';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [mounted, setMounted] = useState(false); // Track if the component is mounted

  // Update the currentTheme after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync theme state with the useTheme hook
  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  // Update the theme class when it changes
  useEffect(() => {
    if (mounted) {
      const themeClass = currentTheme === 'dark' ? 'dark' : 'light';
      document.documentElement.classList.add(themeClass);
      document.documentElement.classList.remove(currentTheme === 'dark' ? 'light' : 'dark');
    }
  }, [currentTheme, mounted]);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  if (!mounted) return null; // Ensure the theme is applied only after the client-side has mounted

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center m-6 mt-6">
      <div
        className={`font-semibold ml-10 w-full md:w-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 ${isMenuOpen ? 'block' : 'hidden'
          } md:block`}
      >
        {/* big screen */}
        <ul className=" flex-col ml-[90px] md:flex-row gap-6 md:gap-10 hidden md:flex">
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
          <a className='hover:text-slate-700' href="https://github.com/kshitiz58"><FaGithub size={30} /></a>
          <a className='hover:text-slate-600' href="https://x.com/kshitizBabik"><FaXTwitter size={30} /></a>
          <a className='text-blue-500 hover:text-blue-600' href="https://www.linkedin.com/in/kshitij-bishokarma/"><FaLinkedin size={30} /></a>
        </div>

        <div className="absolute -top-4 right-1.5 md:relative ">
          <button onClick={toggleTheme} className="relative bg-transparent rounded-full focus:outline-none p-4">
            <IoIosSunny
              className="absolute mt-0.5 mr-0.5 transition-all ease-in-out transform dark:rotate-180 dark:scale-0 dark:opacity-0 opacity-100"
              size={30}
            />
            <FaRegMoon
              className="absolute mt-2  ml-1 transition-all ease-in-out transform dark:rotate-0 dark:scale-100 dark:opacity-100 opacity-0"
              size={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
