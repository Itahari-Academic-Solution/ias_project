import React from 'react';

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-stretch"> 
          <div className="lg:flex-grow md:w-1/2 lg:pr-32 lg:p-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap- ">
            <h1 className="title-font sm:text-4xl lg:text-6xl mb-4 font-medium text-gray-900">
            Unlock Your Potential 
              <br className="hidden lg:inline-block" /> with Education
            </h1>
            <p className="mb-8 leading-relaxed mt-4 mb-24">
            Join us in shaping the leaders of tomorrow through innovative education and unwavering support.
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
            <img className="object-cover object-center rounded h-full w-full" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>
    </>
  );
}
