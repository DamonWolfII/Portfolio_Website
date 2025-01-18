"use client";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  technologies: string[];
  liveUrl: string;
};

const ProjectCard = ({ title, imageSrc, technologies, liveUrl }: ProjectCardProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl text-black dark:text-white font-semibold mb-4 text-center">{title}</h3>
    <Image className="h-40 w-full object-cover rounded-md mb-4" src={imageSrc} width={500} height={500} alt={title} />
    <h4 className="font-semibold text-black dark:text-white mb-2">Technologies Used:</h4>
    <ul className="list-disc text-black dark:text-white list-inside mb-4">
      {technologies.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
    <a
      href={liveUrl}
      className="block px-4 py-2 bg-amber-500 dark:bg-slate-600 dark:hover:bg-slate-700 text-white text-center rounded-lg hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-800"
    >
      Visit Live Website
    </a>
  </div>
);

const Project = () => {
  const projects = [
    {
      title: "Shofydrop",
      imageSrc: "/shofydrop.png",
      technologies: ["Java 19", "AWS & S3 Bucket", "Custom Procedure Language"],
      liveUrl: "https://shofydrop.com/",
    },
    {
      title: "MSP Academy",
      imageSrc: "/msp.png",
      technologies: ["Java 19", "RabbitMQ", "Postgres"],
      liveUrl: "https://mspacademy.co/",
    },
    {
      title: "Everest Fitness",
      imageSrc: "/everest.png",
      technologies: ["Java 21", "Postgres", "Web Socket"],
      liveUrl: "#",
    },
  ];

  return (
    <div id="projects" className="container mx-auto p-8 sm:p-12">
      <h2 className="text-2xl font-semibold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://everestfitness.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-white bg-amber-500 rounded-full hover:bg-amber-600 dark:bg-slate-600 dark:hover:bg-slate-700 transition-colors"
        >
          <FaGithub className="mr-2" /> See All Projects
        </a>
      </div>
    </div>
  );
};

export default Project;
