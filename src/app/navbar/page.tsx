'use client'
import React, { useState, useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Bar from '@/components/Bar';
import Link from 'next/link'
import { MdOutlineMenu } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { IoIosSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }
  interface NavbarProps {
    className?: string;
  }
  const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { setTheme, theme } = useTheme();
    const pathname = usePathname();
    const [currentTheme, setCurrentTheme] = useState(theme);
  
    useEffect(() => {
      setCurrentTheme(theme);
    }, [theme]);
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };
  return (
    <div className='flex flex-col md:flex-row justify-between items-center m-6 mt-6'>

      <div className='flex items-center justify-between w-full md:w-auto'>
        <Bar />
        <button onClick={toggleMenu} className='p-2 md:hidden ml-4'>
          <MdOutlineMenu size={30} className='text-gray-800 hover:text-black transition-colors' />
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`w-full md:w-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className='flex flex-col md:flex-row gap-6 md:gap-10'>
          <li><Link href="/" className='text-lg text-gray-800 hover:text-black transition-colors'>Home</Link></li>
          <li><Link href="/About" className='text-lg text-gray-800 hover:text-black transition-colors'>About</Link></li>
          <li><Link href="/Projects" className='text-lg text-gray-800 hover:text-black transition-colors'>Projects</Link></li>
          <li><Link href="/Contact" className='text-lg text-gray-800 hover:text-black transition-colors'>Contact</Link></li>
        </ul>
      </div>

      {/* Social Icons for large screens */}
      <div className='hidden md:flex gap-7 mt-6 md:mt-0'>
        <FaGithub size={30} className='text-gray-800 hover:text-black transition-colors' />
        <FaSquareXTwitter size={30} className='text-gray-800 hover:text-black transition-colors' />
        <FaLinkedin size={30} className='text-gray-800 hover:text-black transition-colors' />
        <div>
        <Button
              variant="secondary"
              size="icon"
              onClick={toggleTheme}
              className="relative bg-transparent rounded-full "
            >
              <IoIosSunny className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "/>
              <FaRegMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100  "/>
            </Button>
        </div>
      </div>
    </div>
  )
}
}

export default Page;
