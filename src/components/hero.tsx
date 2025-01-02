'use client'
import React from 'react';
import Image from 'next/image';
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
 
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = './CV.pdf';
      link.download = 'SangamCV.pdf';  
      link.click(); 
    }
  return (
    <div className='m-6 md:m-16 mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center p-8'>
      <div className='text-center md:text-left md:pl-16'>
        <h1 className='font-extrabold text-2xl md:text-4xl'>
          Hi, I'm Sangam.
        </h1>
        <p className='mt-4  text-lg'>
        Front-End Developer.
        </p>
        <p className='mt-4 text-start'>
          "Welcome to my portfolio! I am Sangam, a dedicated front-end developer with a knack for crafting visually appealing and highly functional websites. With over 6 months of hands-on experience in React.js and a strong foundation in web technologies, I bring creativity and technical expertise to every project. I'm also exploring new technologies and working on exciting projects like building an e-commerce website. Feel free to explore my work and connect with me!"
        </p>
        <div className='flex gap-5'>
         <button className='inline-block mt-6 bg-slate-600 text-white hover:bg-slate-700 transition-colors rounded-xl py-2 px-6 ' onClick={()=>window.scroll({
          top: 2000,   
          left: 0,    
          behavior: 'smooth'
        })}>
     Want to work together?
      </button>   
      <button className='mt-6 bg-slate-600 text-white flex gap-2 rounded-xl py-2 px-6 animate-bounce hover:bg-slate-700' onClick={handleDownload}>Download CV <FaChevronDown className='mt-1'/>
      </button>
      </div>
</div>
      <div className='flex justify-center'>
        <Image
          src="/profile.jpg"
          width={300}
          height={300}
          alt="profile"
          className='rounded-full shadow-lg'
        />
      </div>
    </div>
  );
};

export default Hero;
