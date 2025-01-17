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
          <h3 className="text-xl text-black font-semibold mb-4 text-center">Shofydrop</h3>
          <Image
            className="h-40 w-full object-cover rounded-md mb-4"
            src='/shofydrop.png'
            width={500}
            height={500}
            alt="shofydrop" />

          <h4 className=" text-black font-semibold mb-2">Technologies Used:</h4>
          <ul className="list-disc text-black list-inside mb-4">
            <li>Java 19</li>
            <li>AWS & S3 Bucket</li>
            <li>Custom Procedure Language</li>
          </ul>
          <a
            href="https://shofydrop.com/"
            className="block px-4 py-2 bg-amber-500 text-white text-center rounded-lg hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-800"
          >
            Visit Live Website
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-center text-black">MSP Academy</h3>
          <Image
            className="h-40 w-full object-cover rounded-md mb-4"
            src={'/msp.png'}
            width={500}
            height={500}
            alt="mspacademy"
          />
          <h4 className="font-semibold text-black mb-2">Technologies Used:</h4>
          <ul className="list-disc text-black list-inside mb-4">
          <li>Java 19</li>
            <li>RabbitMQ</li>
            <li>Postgres</li>
          </ul>
          <a
            href="https://mspacademy.co/"
            className="block px-4 py-2 bg-amber-500 text-white text-center rounded-lg hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-800"
          >
            Visit Live Website
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl text-black font-semibold mb-4 text-center">
            Everest Fitness
          </h3>
          <Image
            className="h-40 w-full object-cover rounded-md mb-4"
            src={'/everest.png'}
            width={500}
            height={500}
            alt="Instagram Clone"
          />
          <h4 className="font-semibold text-black mb-2">Technologies Used:</h4>
          <ul className="list-disc text-black list-inside mb-4">
            <li>Java 21</li>
            <li>Postgres</li>
            <li>Web Socket</li>
          </ul>
          <a
            href="#"
            className="block px-4 py-2 bg-amber-500 text-white text-center rounded-lg hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-800"
          >
            Visit Live Website
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://everestfitness.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-white bg-amber-500 rounded-full hover:bg-amber-600 transition-colors"
        >
          <FaGithub className="mr-2" /> See All Projects
        </a>
      </div>
    </div>
  );
};

export default Project;
