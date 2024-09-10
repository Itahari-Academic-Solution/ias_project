import React from "react";

export default function About() {
  return (
    <>
      <div className="container mx-auto relative p-4">
        <h2 className="text-gray-900 text-5xl mb-4 font-normal">About</h2>

        
        <div
          id="about"
          className="relative bg-white overflow-hidden mt-16 boxshadow rounded-xl"
        >
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/438301851_122135283140238288_3198757670783674169_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8t8q5mQqFgQQ7kNvgHeBp2d&_nc_ht=scontent.fktm17-1.fna&oh=00_AYAuBLOuRKUMexUktD0HZRY94zR-xBSW1QowyK-F1G3JJg&oe=66E4ECA8"
              alt=""
            />
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
              </svg>

              <div className="pt-1"></div>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-3 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className="my-6 text-1xl tracking-tight font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    About Itahari Academic Solution
                  </h2>

                  <p className="leading-8">
                    Itahari Academic Solutions Institute is situated at
                    Itahari-8 (near Pashupati Mandir), Established by Mr Rohit
                    Karki (CEO), is a shining example of superior education. One
                    of the key offerings of Itahari Academic Solutions is the
                    Bridge Course, designed to facilitate smooth transitions
                    between different academic levels. This program covers
                    essential topics to ensure that students can bridge any
                    knowledge gaps and progress confidently in their educational
                    journeys. Additionally, the institute provides specialized
                    preparation courses for PCL Nursing, Health Assistant (HA),
                    and Overseer examinations, equipping students with the
                    necessary knowledge and skills to excel in these competitive
                    fields.
                  </p>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
