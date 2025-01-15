"use client"
import React from "react";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (

    <div className="container mx-auto p-8 sm:p-12 ">
      <h2 className="text-2xl font-semibold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl text-black font-semibold mb-4 text-center">Destinize</h3>
          <Image
            className="h-40 w-full object-cover rounded-md mb-4"
            src='/destinize.png'
            width={500}
            height={500}
            alt="Destinize" />

          <h4 className=" text-black font-semibold mb-2">Technologies Used:</h4>
          <ul className="list-disc text-black list-inside mb-4">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>HTML</li>
          </ul>
          <a
            href="https://intern-black-two.vercel.app/"
            className="block px-4 py-2 bg-slate-800 text-white text-center rounded-lg hover:bg-slate-700 transition-colors"
          >
            Get Live Demo
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-center text-black">Ecommerce</h3>
          <Image
            className="h-40 w-full object-cover rounded-md mb-4"
            src={'/Ecommerce.png'}
            width={500}
            height={500}
            alt="Ecommerce"
          />
          <h4 className="font-semibold text-black mb-2">Technologies Used:</h4>
          <ul className="list-disc text-black list-inside mb-4">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>
          <a
            href="#"
            className="block px-4 py-2 bg-slate-800 text-white text-center rounded-lg hover:bg-slate-700 transition-colors"
          >
            Demo Not Available
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl text-black font-semibold mb-4 text-center">
            Instagram Clone
          </h3>
          <Image
            className="h-40 w-full object-cover rounded-md mb-4"
            src={'/insta.png'}
            width={500}
            height={500}
            alt="Instagram Clone"
          />
          <h4 className="font-semibold text-black mb-2">Technologies Used:</h4>
          <ul className="list-disc text-black list-inside mb-4">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>HTML</li>
          </ul>
          <a
            href="#"
            className="block px-4 py-2 bg-gray-400 text-white text-center rounded-lg cursor-not-allowed"
          >
            Demo Not Available
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/kshitiz58"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
        >
          <FaGithub className="mr-2" /> See All Projects
        </a>
      </div>
    </div>
  );
};

export default Project;
