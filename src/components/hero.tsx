'use client';
import React from 'react';
import Image from 'next/image';
import { FaChevronDown } from "react-icons/fa6";
import { Button } from './ui/button';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './CV.pdf';
    link.download = 'Kshitiz_Resume.pdf';
    link.click();
  };

  return (
    <div id="hero" className="m-6 md:m-16 mt-16  grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center pt-12 p-8">
      {/* Image Section */}
      <div className=" flex justify-center">
        <Image
          src="/profile.jpg"
          width={300}
          height={300}
          alt="profile"
          className="rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left md:pl-16">
        <h1
          className="font-semibold text-2xl md:text-4xl overflow-hidden border-r-2 border-black inline-block"
          style={{
            animation: 'typewriter 4s steps(30, end) 1s infinite alternate, blink 1s step-end infinite',
            whiteSpace: 'nowrap',
            maxWidth: '100%',
          }}
        >
          Hi, I&apos;m Kshitij Bishokarma.
        </h1>

        <p className="mt-2 font-semibold text-lg md:text-xl">Java Backend Developer.</p>

        <p className="mt-4 text-sm md:text-base text-justify">
          Welcome to my portfolio. I&apos;m Kshitij, a dedicated backend developer with a knack for 
          crafting visually appealing and highly functional websites. With over 1+ years of hands-on 
          experience in Java and a strong foundation in web technologies. I bring creativity and technical 
          expertise to every project. I&apos;m also exploring new technologies and working on exciting projects 
          like building an e-commerce website. Feel free to explore my work and connect with me.
        </p>

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 mt-6 justify-center items-center md:justify-start">
          <Button
            className="bg-amber-400 hover:bg-amber-500 dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-white w-auto"
            onClick={() => window.scroll({ top: 2000, left: 0, behavior: 'smooth' })}
          >
            Want to work together?
          </Button>
          <Button
            className="bg-amber-400 hover:bg-amber-500 dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-white w-auto"
            onClick={handleDownload}
          >
            Save Resume <FaChevronDown />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
