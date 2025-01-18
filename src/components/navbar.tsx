"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaRegMoon } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Button } from "./ui/button";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="hidden md:flex items-center space-x-6">
          <a onClick={() => scrollToSection("hero")} className="hover:underline cursor-pointer">
            Home
          </a>
          <a onClick={() => scrollToSection("about")} className="hover:underline cursor-pointer">
            About
          </a>
          <a onClick={() => scrollToSection("projects")} className="hover:underline cursor-pointer">
            Projects
          </a>
          <a onClick={() => scrollToSection("contact")} className="hover:underline cursor-pointer">
            Contact
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/kshitiz58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/kshitizBabik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kshitij-bishokarma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <Button variant={"ghost"} onClick={toggleTheme} className="relative ">
            <IoIosSunny
              className={`absolute transition-transform ${
                currentTheme === "dark"
                  ? "opacity-0 scale-0"
                  : "opacity-100 scale-100"
              }`}
              size={25}
            />
            <FaRegMoon
              className={`absolute transition-transform ${
                currentTheme === "dark"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
              size={25}
            />
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} aria-label="Open Menu">
                <Menu size={25} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6 flex flex-col h-full">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex-grow space-y-4">
                <a onClick={() => scrollToSection("hero")} className="block text-lg font-medium hover:underline cursor-pointer">
                  Home
                </a>
                <a onClick={() => scrollToSection("about")} className="block text-lg font-medium hover:underline cursor-pointer">
                  About
                </a>
                <a onClick={() => scrollToSection("projects")} className="block text-lg font-medium hover:underline cursor-pointer">
                  Projects
                </a>
                <a onClick={() => scrollToSection("contact")} className="block text-lg font-medium hover:underline cursor-pointer">
                  Contact
                </a>
              </div>
              <SheetFooter className="flex justify-center items-center space-x-4 ">
                <div className="flex space-x-4 mx-auto">
                  <a
                    href="https://github.com/kshitiz58"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://x.com/kshitizBabik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kshitij-bishokarma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <Button
                    variant={"ghost"}
                    onClick={toggleTheme}
                    className="relative -mt-2 hover:dark:bg-black hover:bg-white"
                  >
                    <IoIosSunny
                      className={`absolute transition-transform ${
                        currentTheme === "dark"
                          ? "opacity-0 scale-0"
                          : "opacity-100 scale-100"
                      }`}
                      size={25}
                    />
                    <FaRegMoon
                      className={`absolute transition-transform ${
                        currentTheme === "dark"
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      }`}
                      size={25}
                    />
                  </Button>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
