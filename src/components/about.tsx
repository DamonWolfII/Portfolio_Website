'use client';
import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaFlutter } from "react-icons/fa6";
import { LuFigma } from "react-icons/lu";
import { SiAdobephotoshop } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-16 gap-8">
      {/* About Me Section */}
      <div className="p-6 bg-white shadow-md rounded-lg h-auto">
        <h1 className="text-4xl font-extrabold text-black mb-6">About Me</h1>
        <div className="text-2xl font-bold text-black mb-4">
          <p>Sangam Thapa Magar</p>
          <p>Front-End Developer</p>
        </div>
        <p className="leading-relaxed text-gray-700">
          My expertise includes HTML, CSS, JavaScript, and React.js, backed by over six months of hands-on experience in building functional and visually appealing applications.
        </p>
        <p className="leading-relaxed text-gray-700 mt-4">
          Currently, I’m pursuing a Bachelor's in BIT, which has provided me with a strong foundation in software development and problem-solving. My academic journey and projects, such as e-commerce platforms, travel guide apps, and online management systems, have sharpened my skills and fostered a deep interest in technology-driven solutions.
        </p>
        <p className="leading-relaxed text-gray-700 mt-4">
          Collaboration and effective communication are at the heart of my work ethic. I pride myself on being a team player with strong time management and leadership abilities. I also enjoy engaging in innovative projects that address challenges in Nepal, combining my technical expertise with a passion for meaningful impact.
        </p>
        <p className="leading-relaxed text-gray-700 mt-4">
          When I’m not coding, I’m exploring new technologies, brainstorming creative ideas, and finding ways to turn concepts into reality.
        </p>
      </div>
      
      {/* Skills Section */}
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-extrabold text-black mb-6">Skills</h1>
        <div className="grid grid-cols-4 gap-9 justify-items-center items-center">
          <IoLogoJavascript size={50} className="text-yellow-500" />
          <FaReact size={50} className="text-blue-500" />
          <RiTailwindCssFill size={50} className="text-slate-900" />
          <FaGithub size={50} className="text-gray-800" />
          <FaHtml5 size={50} className="text-orange-600" />
          <LuFigma size={50} className="text-purple-600" />
          <FaFlutter size={50} className="text-blue-400" />
          <SiAdobephotoshop size={50} className="text-blue-600" />
          <RiNextjsLine size={50} className="text-black" />
          <FaWordpress size={50} className="text-blue-600" />
          <SiCanva size={50} className="text-blue-600" />
          <FaJava size={50} className="text-orange-500" />
        </div>
        <div className="mt-4">
        <h1 className="text-3xl font-extrabold text-black">Education</h1>
        <div className="text-black mt-3">
          <h1 >
           <p className="text-xl"> High School</p>
            <p className="bg-slate-700 w-32 text-center rounded-md text-white">2018-2020</p>
            <p>Mahendra Rastrya college</p>
          </h1>
        </div>
        <div className="text-black mt-3">
          <h1>
            <p className="text-xl">Bachelor</p>
            <p className="bg-slate-700 w-32 text-center rounded-md text-white">2022 - Present </p>
            <p>Texas college of Management and It</p>
          </h1>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;