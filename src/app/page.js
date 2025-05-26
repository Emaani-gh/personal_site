"use client";

import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

import Image from "next/image";
import Seidu from "/public/seidu.png";
import websiteIcon from "/public/web-icon.png";
import webApp from "/public/web-App.png";
import blog from "/public/blog.png";
import noteApp from "/public/noteApp.png";
import weatherApp2 from "/public/weatherApp2.png";
import ecommerceApp from "/public/ecommerce.png";

export default function Home() {
  const [openMenu, setOpenmenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setOpenmenu((prev) => !prev);
  };

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    setDarkMode(saved ? JSON.parse(saved) : false);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <div className="">
      <main className={`px-6 font-poppins dark:bg-gray-900`}>
        <nav className=" shadow-md flex justify-between items-center py-6 fixed left-0 px-8 w-full z-50 md:bg-gray-50 dark:bg-gray-900 dark:text-white">
          {/* ---------LOGO----------------- */}
          <div className="logo">
            <a
              href="#hero"
              className=" font-prism font-bold text-2xl cursor-pointer"
            >
              SEIDU
            </a>
          </div>

          <div className="flex items-center gap-6 ">
            <BsFillMoonStarsFill
              className=" cursor-pointer text-lg"
              onClick={toggleDarkMode}
            />

            {/* ==================================MOBILE MENUS======================================= */}
            <div
              className={`${
                openMenu
                  ? "bg-black opacity-90 fixed top-0 left-0 w-full h-screen md:hidden "
                  : ""
              }`}
            >
              <ul
                className={`menus flex flex-col items-center w-full gap-6 absolute
                top-20 md:hidden  ${openMenu ? "openMobile" : ""}`}
              >
                <li className="hover:underline underline-offset-8">
                  <a
                    className="text-white md:textblack text-xl dark:text-white"
                    href="#hero"
                  >
                    Home
                  </a>
                </li>
                <li className="hover:underline underline-offset-8">
                  <a
                    className="text-white md:textblack text-xl dark:text-white"
                    href="#portfolio"
                  >
                    Projects
                  </a>
                </li>

                <li className="hover:underline underline-offset-8">
                  <a
                    className="text-white md:textblack text-xl dark:text-white"
                    href="#"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl bg-cyan-500 px-4 py-2 rounded-md text-white"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            {/* ==================================DESK MENUS======================================= */}
            <ul
              className={`hidden md:flex gap-4  ${
                openMenu ? "openMobile" : ""
              }`}
            >
              <li className=" hover:underline underline-offset-8">
                <a className="text-black text-xl dark:text-white" href="#hero">
                  Home
                </a>
              </li>
              <li className=" hover:underline underline-offset-8">
                <a
                  className="text-black text-xl dark:text-white"
                  href="#portfolio"
                >
                  Projects
                </a>
              </li>
              <li className=" hover:underline underline-offset-8">
                <a className="text-black text-xl dark:text-white" href="#">
                  Blogs
                </a>
              </li>

              <li>
                <a
                  className="text-xl bg-cyan-500 px-4 py-2 rounded-md text-white"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
            {/* ==================================HAMBURGER======================================= */}
            <div
              className={`hamburger w-8 md:hidden cursor-pointer ${
                openMenu ? "showMobile" : ""
              }`}
              onClick={toggleMenu}
            >
              <div
                className={`${
                  openMenu ? "bg-white" : "bg-black"
                } line-1 w-full h-[3px] dark:bg-white `}
              ></div>
              <div
                className={`${
                  openMenu ? "bg-white" : "bg-black"
                } line-2 w-full h-[3px] dark:bg-white my-1`}
              ></div>
              <div
                className={`${
                  openMenu ? "bg-white" : "bg-black"
                } line-3 w-full h-[3px] dark:bg-white `}
              ></div>
            </div>
          </div>
        </nav>
        {/* ==================================END OF NAV=======================================-=============================================================== */}

        {/* ==================================HERO SECTION======================================= */}

        <section
          id="hero"
          className=" h-[calc(100vh-80px)] md:container md:mx-auto flex py-20"
        >
          <div className="md:flex w-full justify-around items-center gap-4 mx-auto px-4 py-10 md:mx-0 md:shadow-md rounded-lg ">
            <div className="flex flex-col items-center md:items-start md:w-1/2 ">
              <h2 className="text-teal-600 text-4xl font-bold py-2 text-center md:text-left">
                Seidu Abdul Salam
              </h2>
              <h4 className=" py-2 text-gray-500 font-semibold text-xl dark:text-white">
                Web Developer
              </h4>
              <p className="max-w-lg text-center md:text-left text-gray-500 text-lg py-4 font-medium dark:text-white">
                Full Stack developer with passion for creating new things. I
                love to learn new skills and technology and also enjoy football.
              </p>
              <div className="social-icons flex justify-center gap-10 py-5 text-4xl text-gray-500 dark:text-white">
                <a href="#">
                  <AiFillLinkedin className=" cursor-pointer hover:text-gray-700" />
                </a>
                <a href="#">
                  <AiFillGithub className=" cursor-pointer hover:text-gray-700" />
                </a>
                <a href="#">
                  <AiFillInstagram className=" cursor-pointer hover:text-gray-700" />
                </a>
              </div>
            </div>

            <div className="relative flex w-80 h-80 rounded-full bg-gradient-to-b from-teal-500 mt-16 overflow-hidden mx-auto md:mx-0 md:mt-0 ">
              <Image
                src={Seidu}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
                alt="profile pic"
              />
            </div>
          </div>
        </section>

        {/* =========================SECTION SERVICES========================= */}
        <section
          id="service"
          className="min-h-screen md:container md:mx-auto py-20 flex items-center"
        >
          <div>
            <h2 className="py-8 mb-10 text-3xl text-gray-600 font-medium text-center underline underline-offset-8 decoration-teal-500 dark:text-white ">
              What I Do
            </h2>
            <div className="cards lg:flex gap-10">
              <div className="card flex-1 flex flex-col items-center shadow-md p-8 rounded-lg mb-16 lg:mb-0 dark:bg-white ">
                <Image src={websiteIcon} className="py-6" alt="website icon" />
                <h3 className="text-2xl text-gray-600 font-medium py-4 text-center ">
                  Frontend Development
                </h3>
                <p className="text-gray-600 text-lg font-medium py-4 text-center">
                  I build responsive and interactive frontend Websites and Apps
                  using modern technologies
                </p>
                <h4 className="text-lg text-teal-500 font-bold py-2 text-center">
                  Skills & Technologies
                </h4>
                <ul className="text-center">
                  <li className=" text-gray-700 font-medium py-1">HTML</li>
                  <li className=" text-gray-700 font-medium py-1">
                    CSS, Tailwind, Bootstrap
                  </li>
                  <li className=" text-gray-700 font-medium py-1">
                    JavaScript
                  </li>
                  <li className=" text-gray-700 font-medium py-1">React</li>
                </ul>
              </div>

              <div className="card flex-1 flex flex-col items-center shadow-md p-8 rounded-lg mb-16 lg:mb-0 dark:bg-white ">
                <Image
                  src={websiteIcon}
                  className="py-6"
                  alt="web design icon"
                />
                <h3 className="text-2xl text-gray-600 font-medium py-4 text-center ">
                  Design
                </h3>
                <p className="text-gray-600 text-lg font-medium py-4 text-center">
                  I build responsive and interactive Designs
                </p>
                <h4 className="text-lg text-teal-500 font-bold py-2 text-center">
                  Skills & Technologies
                </h4>
                <ul className="text-center">
                  <li className=" text-gray-700 font-medium py-1">Figma</li>
                  <li className=" text-gray-700 font-medium py-1">
                    Adobe Illustrator
                  </li>
                </ul>
              </div>

              <div className="card flex-1 flex flex-col items-center shadow-md p-8 rounded-lg mb-16 lg:mb-0 dark:bg-white ">
                <Image src={webApp} className="py-6" alt="wen app icon" />
                <h3 className="text-2xl text-gray-600 font-medium py-4 text-center ">
                  Backend Development
                </h3>
                <p className="text-gray-600 text-lg font-medium py-4 text-center">
                  I build optimized backend applications using modern
                  technologies
                </p>
                <h4 className="text-lg text-teal-500 font-bold py-2 text-center">
                  Skills & Technologies
                </h4>
                <ul className="text-center">
                  <li className=" text-gray-700 font-medium py-1">
                    Nodejs,Express,Nest js
                  </li>
                  <li className=" text-gray-700 font-medium py-1">Amazon S3</li>
                  <li className=" text-gray-700 font-medium py-1">
                    MySQL,MongoDB
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* ---------------------------------------------------PROJECTS SECTION============================================================================*/}
        <section
          id="portfolio"
          className="min-h-screen md:container md:mx-auto py-20 items-center "
        >
          <div>
            <h2 className="py-8 mb-10 text-3xl text-gray-600 font-medium text-center underline underline-offset-8 decoration-teal-500 dark:text-white  ">
              Projects
            </h2>

            <div className="projects flex flex-col gap-10 md:flex-row flex-wrap">
              <div className=" project basis-1/3 flex-1 shadow-lg rounded-lg">
                <Image
                  src={blog}
                  className="rounded-lg"
                  alt="Screenshot of blog project"
                />
              </div>
              <div className="project basis-1/3 flex-1 shadow-lg rounded-lg">
                <Image
                  src={noteApp}
                  className="rounded-lg"
                  alt="Screenshot of noteApp project"
                />
              </div>
              <div className="project basis-1/3 flex-1 shadow-lg rounded-lg">
                <Image
                  src={ecommerceApp}
                  className="rounded-lg"
                  alt="Screenshot of ecommerce project"
                />
              </div>
              <div className="project basis-1/3 flex-1 shadow-lg rounded-lg">
                <Image
                  src={weatherApp2}
                  className="rounded-lg"
                  alt="Screenshot of weather project"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="md:container md:mx-auto py-20 items-center "
        >
          <div className="lg:flex lg:items-start lg:gap-10">
            <div className="mb-8 flex-1">
              <h2 className="mb-5 text-3xl text-gray-600 font-medium text-center underline underline-offset-8 decoration-teal-500 dark:text-white">
                Contact
              </h2>

              <div className="flex flex-col gap-10 md:flex-row flex-wrap">
                <p className="text-gray-600 text-center dark:text-white">
                  I would like to hear about your project and how I could help.
                  Please fill in the form, and I will get back to you as soon as
                  possible.
                </p>
              </div>
            </div>

            <form className="space-y-6 flex-1 flex flex-col items-center">
              <div className="w-full ">
                <input
                  type="text"
                  placeholder="NAME"
                  className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 px-2 py-1 w-full dark:text-white"
                />
              </div>

              <div className="w-full ">
                <input
                  type="text"
                  placeholder="EMAIL"
                  className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 px-2 py-1 w-full dark:text-white"
                />
              </div>

              <div className="w-full ">
                <textarea
                  placeholder="Message"
                  className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 px-2 py-1 w-full dark:text-white resize-none"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="self-end underline underline-offset-8 decoration-teal-500 dark:text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <div className="section-border"></div>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm my-8">
          &copy; 2025 Seidu. All rights reserved.
        </p>
      </main>
    </div>
  );
}
