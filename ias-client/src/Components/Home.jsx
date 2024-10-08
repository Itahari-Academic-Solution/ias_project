import React from "react";

import { Carousel } from "flowbite-react";
import CarouselComponent from "./CarouselComponent";
import Collaboration from "./Collaboration";
import Popup from "./Popup";
import About from "./About";
import BoardOfDirectors from "./BoardOfDirectors";
export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-stretch">
          <div className="lg:flex-grow md:w-1/2 lg:pr-32 lg:p-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap- ">
            <h1 className="title-font sm:text-4xl lg:text-6xl mb-4 font-semibold text-gray-900 lg:leading-snug">
              Unlock Your Potential
              <br className="hidden lg:inline-block " /> with Education
            </h1>
            <p className="mb-24 leading-relaxed mt-6 ">
              Join us in shaping the leaders of tomorrow through innovative
              education and unwavering support.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#BE1B2C] border-0 py-2 px-14 focus:outline-none hover:bg-[#A8162B] rounded-xl text-lg">
                Courses
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-14 focus:outline-none hover:bg-gray-200 rounded-xl text-lg">
                Contact
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center">
            <img
              className="object-cover object-center rounded h-full w-full"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      <div className="Courses p-14">
        <div className="container mx-auto mt-10">
          <h3 className=" text-center text-gray-900 text-4xl mb-4 font-semibold">
            Explore Our Popular Courses
          </h3>
          <div className="card grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            <div className=" flex flex-col  justify-center items-center p-8 rounded-xl boxshadow">
              <i class="ri-id-card-line text-5xl text-red-400"></i>
              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">
              Institute of Engineering 
              </h2>

              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur.lorem8 Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.{" "}
              </p>
            </div>
            <div className=" flex flex-col  justify-center items-center p-8 rounded-xl boxshadow">
              <i class="ri-hospital-line text-5xl text-green-400"></i>
              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">
                Medical Field
              </h2>

              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur.lorem8 Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.{" "}
              </p>
            </div>
            <div className=" flex flex-col  justify-center items-center p-8 rounded-xl boxshadow">
              <i class="ri-computer-line text-5xl text-pink-400"></i>
              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">
                Computer training
              </h2>

              <p className="text-gray-700 ">
                Lorem ipsum dolor sit amet consectetur.lorem8 Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.{" "}
              </p>
            </div>
            <div className=" flex flex-col  justify-center items-center p-8 rounded-xl boxshadow">
              <i class="ri-book-line text-5xl text-blue-400"></i>
              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">
                11/12 Entrance
              </h2>

              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur.lorem8 Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <BoardOfDirectors/>
<About/>
      <div className="patner-col lg:h-[580px] sm:h-[800px] sm:p-10   p-1 lg:flex justify-center items-center mb-20">
        <CarouselComponent />
      </div>
      <div className="collaboration-col p-2 xl:flex justify-center items-center h-full w-full">
        <Collaboration />
      </div>
    </>
  );
}
