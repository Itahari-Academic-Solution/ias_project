import React from 'react'

export default function Collaboration() {
  return (
   <>
   <section className='w-full ' >
      <div className="  mx-auto md:px-12 lg:px-12 max-w-screen-xl flex flex-col lg:h-svh justify-center h-full w-full" >
        <div className="flex flex-col lg:p-10">
          <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
            <div>
            <h1 className="text-gray-900 text-5xl mb-4 font-bold">Collaboration</h1>
              <h2>Simplified markup</h2>
              <p className="text-balance">
                See the code for this page to see how you can use Astro to simplify your markup.
              </p>
            </div>
          </div>
          {/* Starts component */}
          <div className="mt-6 border-t pt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
              <div>
                <span className="text-gray-600 uppercase text-xs font-medium">Because why not</span>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                  Innovative financial solutions for every situation
                </p>
                <p className="text-sm mt-4 text-gray-700 text-balance">
                  Discover a variety of tools, services, and expert guidance tailored to your unique financial needs.
                </p>
                <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      className="icon icon-tabler text-gray-700 size-4 icon-tabler-360"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M17 15.328c2.414-.718 4-1.94 4-3.328 0-2.21-4.03-4-9-4s-9 1.79-9 4 4.03 4 9 4" />
                      <path d="M9 13l3 3-3 3" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Clear data visibility</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      className="icon icon-tabler text-gray-700 size-4 icon-tabler-antenna-bars-3"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 18v-3" />
                      <path d="M10 18v-6" />
                      <path d="M14 18v.01" />
                      <path d="M18 18v.01" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Reduced external factors</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      className="icon icon-tabler text-gray-700 size-4 icon-tabler-load-balancer"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 16v3" />
                      <path d="M12 10v-7" />
                      <path d="M9 6l3-3 3 3" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Enhanced stability</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      className="icon icon-tabler text-gray-700 size-4 icon-tabler-brand-speedtest"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
                      <path d="M16 9l-4 4" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Accelerated times</span>
                  </div>
                </div>
              </div>
              <div className="h-full md:order-first">
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2154311867/display_1500/stock-photo-vibrant-vertical-portrait-of-male-teacher-helping-student-using-computer-in-college-classroom-2154311867.jpg"
                  alt="#_"
                  className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
              <div>
                <span className="text-gray-600 uppercase text-xs font-medium">Just because we can</span>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                  Tailored financial solutions for any scenario
                </p>
                <p className="text-sm mt-4 text-gray-700 text-balance">
                  Discover a range of financial instruments and personalized advice designed to meet your unique requirements.
                </p>
                <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-database text-gray-700 size-4"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                      <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                      <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Transparent Data Access</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-building text-gray-700 size-4"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 21l18 0" />
                      <path d="M9 8l1 0" />
                      <path d="M9 12l1 0" />
                      <path d="M9 16l1 0" />
                      <path d="M14 8l1 0" />
                      <path d="M14 12l1 0" />
                      <path d="M14 16l1 0" />
                      <path d="M3 21l0-18l18 0l0 18" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Simplified Operations</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-currency-dollar text-gray-700 size-4"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 8c-3.333 0 -3.333 -4 0 -4" />
                      <path d="M12 20c3.333 0 3.333 -4 0 -4" />
                      <path d="M6 12h12" />
                      <path d="M12 4l0 16" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Effective Risk Management</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chart-bar text-gray-700 size-4"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 12m0 1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1z" />
                      <path d="M9 8m0 1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1z" />
                      <path d="M15 4m0 1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1z" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Optimized Financial Growth</span>
                  </div>
                </div>
              </div>
              <div className="h-full">
                <img
                  src="https://images.pexels.com/photos/3862389/pexels-photo-3862389.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="#_"
                  className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
              <div>
                <span className="text-gray-600 uppercase text-xs font-medium">Because why not</span>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                  Innovative financial solutions for every situation
                </p>
                <p className="text-sm mt-4 text-gray-700 text-balance">
                  Discover a variety of tools, services, and expert guidance tailored to your unique financial needs.
                </p>
                <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      className="icon icon-tabler text-gray-700 size-4 icon-tabler-360"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M17 15.328c2.414-.718 4-1.94 4-3.328 0-2.21-4.03-4-9-4s-9 1.79-9 4 4.03 4 9 4" />
                      <path d="M9 13l3 3-3 3" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Clear data visibility</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      className="icon icon-tabler text-gray-700 size-4 icon-tabler-antenna-bars-3"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 18v-3" />
                      <path d="M10 18v-6" />
                      <path d="M14 18v.01" />
                      <path d="M18 18v.01" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Reduced external factors</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      className="icon icon-tabler text-gray-700 size-4 icon-tabler-load-balancer"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 16v3" />
                      <path d="M12 10v-7" />
                      <path d="M9 6l3-3 3 3" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Enhanced stability</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                    <svg
                      className="icon icon-tabler text-gray-700 size-4 icon-tabler-brand-speedtest"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
                      <path d="M16 9l-4 4" />
                    </svg>
                    <span className="text-gray-950 font-medium text-sm">Accelerated times</span>
                  </div>
                </div>
              </div>
              <div className="h-full md:order-first">
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2154311867/display_1500/stock-photo-vibrant-vertical-portrait-of-male-teacher-helping-student-using-computer-in-college-classroom-2154311867.jpg"
                  alt="#_"
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
  )
}
