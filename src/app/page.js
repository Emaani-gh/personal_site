"use client";

import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineFileText,
} from "react-icons/ai";
import Tilt from "react-parallax-tilt";

export default function Home() {
  const [openMenu, setOpenmenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState("");

  const toggleMenu = () => {
    setOpenmenu((prev) => !prev);
  };

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    setDarkMode(saved ? JSON.parse(saved) : false);
  }, []);

  // dark mode toggler
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Email handling
  const handleEmailSubmit = async (e) => {
    const url = "https://email-api-aewx.onrender.com/send-email";
    e.preventDefault();
    setLoading(true);

    // const form = new FormData(e.target);
    const formElement = e.target;
    const form = new FormData(formElement);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage(true);
        setError("");
        formElement.reset(); // proper reset
      } else {
        setError("Something went wrong. Try again.");
        setMessage(false); // hide success
      }
    } catch (error) {
      setError("Network error. Please try again.");
      setMessage(false); // hide success
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Footer dynamic Year
  const currentYr = new Date().getFullYear();

  return (
    <div className="">
      <main className={`px-6 font-poppins dark:bg-gray-900`}>
        {/* ====================================NAV BAR =========================================================================== */}
        <nav className=" shadow-md flex justify-between items-center py-6 fixed left-0 px-8 w-full z-50 bg-gray-50 dark:bg-gray-900 dark:text-white">
          {/* ---------LOGO----------------- */}
          <div className="logo">
            <a
              href="/"
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
                  ? "bg-black/80 backdrop-blur-sm fixed top-0 left-0 w-full h-screen md:hidden "
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
                    onClick={() => setOpenmenu(false)}
                  >
                    Home
                  </a>
                </li>
                <li className="hover:underline underline-offset-8">
                  <a
                    className="text-white md:textblack text-xl dark:text-white"
                    href="#portfolio"
                    onClick={() => setOpenmenu(false)}
                  >
                    Projects
                  </a>
                </li>

                <li className="hover:underline underline-offset-8">
                  <a
                    className="text-white md:textblack text-xl dark:text-white"
                    href="#"
                    onClick={() => setOpenmenu(false)}
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl bg-cyan-500 px-4 py-2 rounded-md text-white transition-all duration-300 hover:bg-cyan-600 hover:scale-105 shadow-md hover:shadow-lg"
                    href="/software_dev_resume.pdf"
                    target="_blank"
                    onClick={() => setOpenmenu(false)}
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
                  className="text-xl bg-cyan-500 px-4 py-2 rounded-md text-white transition-all duration-300 hover:bg-cyan-600 hover:scale-105 shadow-md hover:shadow-lg"
                  href="/software_dev_resume.pdf"
                  target="_blank"
                  onClick={() => setOpenmenu(false)}
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
          className=" lg:h-[calc(100vh-80px)] md:container md:mx-auto flex py-20"
        >
          <div className="md:flex w-full justify-around items-center gap-4 mx-auto px-4 py-10 md:mx-0 md:shadow-md rounded-lg ">
            <div className="flex flex-col items-center md:items-start md:w-1/2 ">
              <h2 className="text-teal-600 text-4xl font-bold py-2 text-center md:text-left">
                Seidu Abdul Salam
              </h2>
              <h4 className=" py-2 text-gray-500 font-semibold text-xl dark:text-white">
                Software Developer
              </h4>
              <p className="max-w-lg text-center md:text-left text-gray-500 text-lg py-4 font-medium dark:text-white">
                A Full Stack Developer experienced in crafting robust APIs,
                scalable services, and dynamic UIs using modern technologies
                like React, Node.js, and SQL. <br />I build full-stack solutions
                that blend performance, security, and design — from REST APIs to
                responsive interfaces.
              </p>
              <div className="social-icons flex justify-center gap-10 py-5 text-4xl text-gray-500 dark:text-white">
                <a
                  href="https://www.linkedin.com/in/seidu-abdul-salam-434b421a2/"
                  aria-label="linkedInprofile"
                  target="blank"
                >
                  <AiFillLinkedin className=" cursor-pointer hover:text-gray-700" />
                </a>
                <a
                  href="https://github.com/Emaani-gh"
                  aria-label="git profile"
                  target="blank"
                >
                  <AiFillGithub className=" cursor-pointer hover:text-gray-700" />
                </a>
                <a
                  href="/software_dev_resume.pdf"
                  aria-label="git profile"
                  target="blank"
                >
                  <AiOutlineFileText className=" cursor-pointer hover:text-gray-700" />
                </a>
              </div>
            </div>

            <div className="relative flex w-60 h-60 rounded-full bg-gradient-to-b from-teal-500 mt-16 overflow-hidden mx-auto md:mx-0 md:mt-0">
              <img
                src="/seidu.png"
                alt="profile pic"
                className="object-cover w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </section>

        {/* =========================SECTION SERVICES========================= */}
        <section
          id="service"
          className="min-h-screen md:container md:mx-auto py-20 flex justify-center items-center"
        >
          <div>
            <h2 className="py-8 mb-10 text-3xl text-gray-600 font-medium text-center underline underline-offset-8 decoration-teal-500 dark:text-white ">
              What I Do
            </h2>
            <div className="cards md:flex-wrap md:flex gap-10">
              <Tilt className="card flex-1 min-w-[280px] max-w-[320px]   flex flex-col items-center shadow-lg bg-[#f7f7f7] p-2 rounded-lg mb-16 lg:mb-0 dark:bg-white">
                <div>
                  <img
                    src="/web-icon.png"
                    className="m-2 w-[64px] "
                    alt="website icon"
                  />
                  <h3 className="text-2xl text-gray-600 font-medium py-2 text-center ">
                    Frontend Development
                  </h3>
                  <p className="text-gray-600 text-lg font-medium py-4 text-center">
                    I build responsive and interactive frontend Websites and
                    Apps using modern technologies
                  </p>
                  <h4 className="text-lg text-teal-500 font-bold py-2 text-center">
                    Skills & Technologies
                  </h4>
                  <ul className="text-center">
                    <li className=" text-gray-700 font-medium py-1">React</li>
                    <li className=" text-gray-700 font-medium py-1">
                      JavaScript
                    </li>
                    <li className=" text-gray-700 font-medium py-1">
                      CSS3, Tailwind, Bootstrap
                    </li>
                    <li className=" text-gray-700 font-medium py-1">HTML5</li>
                  </ul>
                </div>
              </Tilt>

              <Tilt className="card flex-1 min-w-[280px] max-w-[320px]  flex flex-col items-center shadow-lg bg-[#f7f7f7] p-2 rounded-lg mb-16 lg:mb-0 dark:bg-white">
                <div>
                  <img
                    src="/web-icon.png"
                    className="m-2 w-[64px]"
                    alt="web design icon"
                  />
                  <h3 className="text-2xl text-gray-600 font-medium py-2 text-center ">
                    Design
                  </h3>
                  <p className="text-gray-600 text-lg font-medium py-4 text-center">
                    I build responsive, accessible and interactive Designs
                  </p>
                  <h4 className="text-lg text-teal-500 font-bold py-2 text-center">
                    Skills & Technologies
                  </h4>
                  <ul className="text-center">
                    <li className=" text-gray-700 font-medium py-1">Figma</li>
                    <li className=" text-gray-700 font-medium py-1">Sketch</li>
                    <li className=" text-gray-700 font-medium py-1">
                      Adobe Illustrator
                    </li>
                  </ul>
                </div>
              </Tilt>

              <Tilt className="card flex-1 min-w-[280px] max-w-[320px]  flex flex-col items-center shadow-lg bg-[#f7f7f7] p-2 rounded-lg mb-16 lg:mb-0 dark:bg-white">
                <div>
                  <img
                    src="/web-App.png"
                    className="m-2 w-[64px]"
                    alt="web app icon"
                  />
                  <h3 className="text-2xl text-gray-600 font-medium py-2 text-center ">
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
                    <li className=" text-gray-700 font-medium py-1">
                      Amazon S3
                    </li>
                    <li className=" text-gray-700 font-medium py-1">
                      MySQL,MongoDB
                    </li>
                  </ul>
                </div>
              </Tilt>
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
              <div className="bg-[#f7f7f7]  project basis-1/3 flex-1 shadow-lg rounded-lg flex flex-col">
                <div className="overflow-hidden h-60">
                  <img
                    src="/blog.png"
                    className="rounded-lg"
                    alt="Screenshot of blog project"
                  />
                </div>
                <div className="p-4 flex justify-end flex-col flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800  mb-2">
                      Blogs App
                    </h3>
                    <p className="text-gray-600  mb-4">
                      A full-stack blog platform using React, Express.js,
                      MongoDB, and JWT for authentication. Users can create,
                      edit, and delete blog posts securely.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Emaani-gh/nay_writes_frontend"
                      target="_blank"
                      className="text-teal-500 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://naywrites.onrender.com/"
                      target="_blank"
                      className="text-teal-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#f7f7f7] project basis-1/3 flex-1 shadow-lg rounded-lg flex flex-col">
                <div className="overflow-hidden h-60">
                  <img
                    src="/noteApp.png"
                    className="rounded-t-lg object-cover h-full w-full"
                    alt="Screenshot of noteApp project"
                  />
                </div>
                <div className="p-4 flex justify-end flex-col flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Notes App
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A full-stack note-taking application built with React,
                      Express.js, and MySQL. Users can add, update, and delete
                      notes with persistent storage and a clean, responsive
                      interface.
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <a
                      href="https://github.com/Emaani-gh/note-app"
                      target="_blank"
                      className="text-teal-500 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://note-app-gk91.onrender.com/"
                      target="_blank"
                      className="text-teal-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#f7f7f7] project basis-1/3 flex-1 shadow-lg rounded-lg flex flex-col">
                <div className="overflow-hidden h-60">
                  <img
                    src="/ecommerce.png"
                    className="rounded-t-lg object-cover h-full w-full"
                    alt="Screenshot of noteApp project"
                  />
                </div>
                <div className="p-4 flex justify-end flex-col flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800  mb-2">
                      Ecommerce App
                    </h3>
                    <p className="text-gray-600  mb-4">
                      An eCommerce web application built with React and the
                      FakeStore API. It features product listing, detailed
                      views, and a cart system implemented using React Context
                      for global state management.
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <a
                      href="https://github.com/Emaani-gh/ecommerce"
                      target="_blank"
                      className="text-teal-500 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://ecommerce-0iru.onrender.com/"
                      target="_blank"
                      className="text-teal-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#f7f7f7] project basis-1/3 flex-1 shadow-lg rounded-lg flex flex-col">
                <div className="overflow-hidden h-60">
                  <img
                    src="/weatherApp2.png"
                    className="rounded-t-lg object-cover h-full w-full"
                    alt="Screenshot of noteApp project"
                  />
                </div>
                <div className="p-4 flex justify-end flex-col flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800  mb-2">
                      Ecommerce App
                    </h3>
                    <p className="text-gray-600  mb-4">
                      A React weather app using the OpenWeather API. It shows
                      real-time weather by city or your current location using
                      geolocation.
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <a
                      href="https://github.com/Emaani-gh/weather-application"
                      target="_blank"
                      className="text-teal-500 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://emaani-gh.github.io/weather-application/"
                      target="_blank"
                      className="text-teal-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------CONTACT---------------------------------------------------------------------------- */}
        <section
          id="contact"
          className="md:container md:mx-auto py-20 items-center "
        >
          <div className="max-w-[550px] my-0 mx-auto border rounded-lg p-4 lg:items-start lg:gap-10">
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

            <form
              onSubmit={handleEmailSubmit}
              className="space-y-6 flex-1 flex flex-col items-center"
            >
              <div className="w-full ">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="NAME"
                  className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 px-2 py-1 w-full dark:text-white"
                />
              </div>

              <div className="w-full ">
                <input
                  required
                  type="text"
                  name="email"
                  placeholder="EMAIL"
                  className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 px-2 py-1 w-full dark:text-white"
                />
              </div>

              <div className="w-full ">
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  className="overflow-hidden bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 px-2 py-1 w-full dark:text-white resize-none"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`self-center md:self-end text-xl bg-teal-500 text-white dark:text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-teal-600 shadow-md ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:scale-105 hover:shadow-lg"
                }`}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
            {message && (
              <p className="mt-4 text-green-600 text-center">
                Your message was sent successfully!
              </p>
            )}
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          </div>
        </section>

        <div className="section-border"></div>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm my-8">
          &copy; {currentYr} Seidu. All rights reserved.
        </p>
      </main>
    </div>
  );
}
