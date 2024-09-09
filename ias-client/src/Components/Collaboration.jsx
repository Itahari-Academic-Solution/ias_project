import React from "react";

export default function Collaboration() {
  return (
    <>
      <section className="w-full p-4">
        <div className="mx-auto md:px-12 lg:px-12 max-w-screen-xl flex flex-col lg:h-full justify-center w-full">
          <div className="flex flex-col lg:p-10">
            <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
              <div>
                <h1 className="text-gray-900 text-5xl mb-4 font-bold">
                  Student Achievements
                </h1>
                <h2>Students Name</h2>
                <p className="text-balance">
                  Students who excelled in the entrance exam and obtained high
                  scores.
                </p>
              </div>
            </div>

            {/* Starts component */}
            <div className="mt-6 border-t pt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
                <div>
                  <h2 className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                    <span className="text-pink-600">Bikesh</span> IoE rank 401
                  </h2>
                  <p className="text-sm mt-4 text-gray-700 text-balance">
                    Discover a variety of tools, services, and expert guidance
                    tailored to your unique financial needs.
                  </p>
                </div>
                <div className="h-full md:order-first">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2154311867/display_1500/stock-photo-vibrant-vertical-portrait-of-male-teacher-helping-student-using-computer-in-college-classroom-2154311867.jpg"
                    alt="Financial solutions"
                    className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
                <div>
                  <h2 className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                    <span className="text-pink-600">Sohan</span> Medical field
                    Rank 100
                  </h2>
                  <p className="text-sm mt-4 text-gray-700 text-balance">
                    Discover a range of financial instruments and personalized
                    advice designed to meet your unique requirements.
                  </p>
                </div>
                <div className="h-full">
                  <img
                    src="https://images.pexels.com/photos/3862389/pexels-photo-3862389.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Tailored solutions"
                    className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
                <div>
                  <h2 className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"><span className='text-pink-600'>Jessika </span></h2>
                  <p className="text-sm mt-4 text-gray-700 text-balance">
                    Discover a variety of tools, services, and expert guidance
                    tailored to your unique financial needs.
                  </p>
                </div>
                <div className="h-full md:order-first">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2154311867/display_1500/stock-photo-vibrant-vertical-portrait-of-male-teacher-helping-student-using-computer-in-college-classroom-2154311867.jpg"
                    alt="Innovative solutions"
                    className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            {/* Ends component */}
          </div>
        </div>
      </section>
      <section className="w-full p-4 ">
        <div className="mx-auto md:px-12 lg:px-12 max-w-screen-xl flex flex-col lg:h-full justify-center w-full">
          <div className="flex flex-col lg:p-10">
            <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
              <div>
                <h1 className="text-gray-900 text-5xl mb-4 font-bold sm:mt-10">
                opportunities
                </h1>
                <h2>Oppurtunities</h2>
                <p className="text-balance">
                  See the code for this page to see how you can use Astro to
                  simplify your markup.
                </p>
              </div>
            </div>

            {/* Starts component */}
            <div className="mt-6 border-t pt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
                <div>
                  <h2 className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                    Conducts IT-related <span className='text-pink-600'>project showcases</span>
                  </h2>
                  <p className="text-sm mt-4 text-gray-700 text-balance">
                    In collaboration with Sushma Godawari College, Sunsari:
                    Conducts IT-related project showcases in the AI Bootcamp to
                    enhance students' IT skills.
                  </p>
                </div>
                <div className="h-full md:order-first">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2154311867/display_1500/stock-photo-vibrant-vertical-portrait-of-male-teacher-helping-student-using-computer-in-college-classroom-2154311867.jpg"
                    alt="Financial solutions"
                    className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
                <div>
                  <h2 className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                    {" "}
                    <span className='text-pink-600'>website development</span> <br />
                      opportunities for Student
                  </h2>
                  <p className="text-sm mt-4 text-gray-700 text-balance">
                    Notifies IT students of website development opportunities
                    with other organizations to provide practical application of
                    skills.
                  </p>
                </div>
                <div className="h-full">
                  <img
                    src="https://images.pexels.com/photos/3862389/pexels-photo-3862389.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Tailored solutions"
                    className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
                <div>
                  <h2 className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                    Innovative financial solutions for every situation
                  </h2>
                  <p className="text-sm mt-4 text-gray-700 text-balance">
                    Discover a variety of tools, services, and expert guidance
                    tailored to your unique financial needs.
                  </p>
                </div>
                <div className="h-full md:order-first">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2154311867/display_1500/stock-photo-vibrant-vertical-portrait-of-male-teacher-helping-student-using-computer-in-college-classroom-2154311867.jpg"
                    alt="Innovative solutions"
                    className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            {/* Ends component */}
          </div>
        </div>
      </section>
    </>
  );
}
