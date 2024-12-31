'use client'
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='m-6 md:m-16 mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center p-8'>
      <div className='text-center md:text-left md:pl-16'>
        <h1 className='font-extrabold text-2xl md:text-4xl font-sans'>
          Hi, I'm Sangam.
        </h1>
        <p className='mt-4 text-gray-700 text-lg'>
          A Passionate Front-End Developer.
        </p>
        <p className='mt-4 text-gray-600 leading-relaxed'>
          "Welcome to my portfolio! I am Sangam, a dedicated front-end developer with a knack for crafting visually appealing and highly functional websites. With over 6 months of hands-on experience in React.js and a strong foundation in web technologies, I bring creativity and technical expertise to every project. I'm also exploring new technologies and working on exciting projects like building an e-commerce website. Feel free to explore my work and connect with me!"
        </p>
        <a
          href="#"
          className='inline-block mt-6 bg-green-600 text-white hover:bg-green-700 transition-colors rounded-xl py-2 px-6'
        >
          Want to work together?
        </a>
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

export default Home;
