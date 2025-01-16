'use client';
import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { LuFigma } from "react-icons/lu";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-16 gap-8">
      {/* About Me Section */}
      <div className="p-6 bg-white shadow-md rounded-lg h-auto">
        <h1 className="text-2xl font-semibold text-black mb-6">About Me</h1>
        <div className="text-xl font-semibold text-black mb-4">
          <p>Kshitij Bishokarma</p>
          <p>Java Developer</p>
        </div>
        <p className="leading-relaxed text-gray-700">
          I have around 1+ year of experience as backend developer with domain JAVA.
        </p>
        <p className="leading-relaxed text-gray-700 mt-4">
          Currently, I&apos;ve completed a Bachelor&apos;s in Information Technology, which has provided 
          me with a strong foundation in software development and problem-solving. My academic journey 
          and projects such as e-commerce platforms, travel guide apps, and online management 
          systems, have sharpened my skills and fostered a deep interest in technology-driven solutions.
        </p>
        <p className="leading-relaxed text-gray-700 mt-4">
          Collaboration and effective communication are at the heart of my work ethic. I pride 
          myself on being a team player with strong time management and leadership abilities. 
          I also enjoy engaging in innovative projects that address challenges in Nepal 
          combining my technical expertise with a passion for meaningful impact.
        </p>
        <p className="leading-relaxed text-gray-700 mt-4">
          When I&apos;m not coding, I&apos;m exploring new technologies, brainstorming creative 
          ideas and finding ways to turn concepts into reality.
        </p>
      </div>

      {/* Skills Section */}
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-black mb-6">Skills</h1>
        <div className="grid grid-cols-4 gap-9 justify-items-center items-center">
          <FaJava size={50} className="text-orange-500 hover:animate-bounce cursor-pointer" />
          <FaReact size={50} className="text-blue-500 hover:animate-bounce cursor-pointer" />
          <RiTailwindCssFill size={50} className="text-slate-900 hover:animate-bounce cursor-pointer" />
          <FaGithub size={50} className="text-gray-800 hover:animate-bounce cursor-pointer" />
          <FaHtml5 size={50} className="text-orange-600 hover:animate-bounce cursor-pointer" />
          <LuFigma size={50} className="text-purple-600 hover:animate-bounce cursor-pointer" />
          <SiAdobephotoshop size={50} className="text-blue-600 hover:animate-bounce cursor-pointer" />
          <SiCanva size={50} className="text-blue-600 hover:animate-bounce cursor-pointer" />
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-semibold text-black">Education</h1>
          <div className="text-black mt-3">
            <h1 >
              <p className="text-xl font-bold text-black">+2</p>
              <p className="text-xl">Liverpool International College [ 2017 - 2019 ] </p>
            </h1>
          </div>
          <div className="text-black mt-3">
            <h1 >
              <p className="text-xl font-bold text-black">Bachelor</p>
              <p className="text-xl">Phoenix College of Management [ 2021 - 2024 ] </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;