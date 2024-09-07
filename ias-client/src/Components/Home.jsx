import React from 'react';

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-stretch"> 
          <div className="lg:flex-grow md:w-1/2 lg:pr-32 lg:p-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-red-100 ">
            <h1 className="title-font sm:text-4xl text-9xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" /> readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. .
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#BE1B2C] border-0 py-2 px-6 focus:outline-none hover:bg-[#A8162B] rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
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
