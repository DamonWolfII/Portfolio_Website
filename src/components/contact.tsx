"use client";
import React, { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";
import { IoMdRocket } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ovk7zqs",
          "template_y9l3hk4",
          form.current,
          "QZxzLybba8CLAySzD"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Connect with me{" "}
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          <div className="w-full lg:w-[600px] p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:text-white">
            <form ref={form} onSubmit={sendEmail}>
              <h3 className="text-xl font-semibold text-center text-black dark:text-white mb-4">
                Send me a mail
              </h3>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm text-black dark:text-white font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your First Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-black dark:text-white mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your Last Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black dark:text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@gmail.com"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 "
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 "
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-full max-w-sm mx-auto lg:mx-0 p-6 bg-white  dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center text-black dark:text-white mb-7">
              Contact Details
            </h3>
            <div className="">
              <div>
                <Image
                  className="rounded-full mx-auto"
                  src="/profile.jpg"
                  alt="Profile"
                  width={150}
                  height={150}
                />
              </div>
              <div className="mt-7 text-center">
                <p className="text-xl text-black dark:text-white font-bold">
                  Kshitij Bishokarma
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-100 mb-4">Kathmandu, Nepal</p>
              </div>
            </div>

            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center gap-2">
                <FaLinkedin className="text-blue-500 dark:to-blue-800" />
                <a
                  href="https://www.linkedin.com/in/kshitij-bishokarma/"
                  className="text-black dark:text-white hover:underline hover:text-blue-500"
                >
                  Connect with me
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaXTwitter className="text-blue-500 dark:to-blue-800" />
                <a
                  href="https://x.com/kshitizBabik"
                  className="text-black dark:text-white hover:underline hover:text-blue-500"
                >
                  Follow me
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <IoMdCall className="text-blue-500 dark:to-blue-800" />
                <a
                  href="tel:+977-9816246451"
                  className="text-black dark:text-white hover:underline hover:text-blue-500"
                >
                  Call me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
