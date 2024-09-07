import { useState } from "react";
import "flowbite-react";

export default function CarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    "IAS offers comprehensive IT training programs for students.",
    "These programs have been running successfully for two years.",
    
    "Advanced coding (C, Java, C++)",
    "Web development (HTML, CSS, JavaScript)",
    "Office package proficiency (Word, Excel, PowerPoint)",
    "Basic computer skills",
   
  ];
  const slides = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Slide 1",
      text: "First Slide",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4270365/pexels-photo-4270365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Slide 2",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Slide 3",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="lg:flex justify-center items-center gap-3 container mx-auto">
        <div className="max-w-3xl mx-auto  ">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            {/* Carousel wrapper */}
            <div className="relative h-80 md:h-96 ">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`duration-700 ease-in-out ${
                    index === currentSlide ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={slide.img}
                    className="object-cover w-full h-full"
                    alt={slide.alt}
                  />
                  {slide.text && (
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
                      {slide.text}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Slider indicators */}
            <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentSlide
                      ? "bg-gray-400"
                      : "bg-gray-300 hover:bg-gray-400"
                  } focus:outline-none focus:bg-gray-400 transition`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slider controls */}
            <button
              type="button"
              className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
              onClick={prevSlide}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </button>

            <button
              type="button"
              className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
              onClick={nextSlide}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
        <div className="lg:flex-grow  lg:pr-10 pl-10 md:pr-8 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center  ">
          <h1 className="title-font sm:text-4xl lg:text-3xl  font-semibold text-gray-900 lg:leading-snug">
            Our Achivements
          </h1>

         <div className="w-full h-full">
         <div className="flex flex-col gap-6 mt-6">
            {features.map((feature, index) => (
              <div key={index} className="relative flex items-center">
                {/* Dot */}
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-pink-500 rounded-full text-white font-semibold">
                  {index + 1}
                </div>

                {/* Line */}
                {index !== features.length - 1 && (
                  <div className="absolute top-2 left-2 w-1 h-12 bg-pink-300"></div>
                )}

                {/* Feature Label */}
                <div className="ml-5 text-lg text-gray-800 font-medium">
                  {feature}
                </div>
              </div>
            ))}
          </div>
         </div>
        </div>
      </div>

      
    </>
  );
}
