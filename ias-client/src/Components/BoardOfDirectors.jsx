import React from "react";

export default function BoardOfDirectors() {
  const testimonials = [
    {
      name: "Bonnie Green",
      role: "Developer at Open AI",
      message: "If you care for your time, I hands down would go with this.",
      title: "Very easy this was to integrate",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
    },
    {
      name: "Roberta Casas",
      role: "Lead designer at Dropbox",
      message:
        "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
      title: "Solid foundation for any project",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    },
    {
      name: "Jese Leos",
      role: "Software Engineer at Facebook",
      message:
        "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
      title: "Mindblowing workflow",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    },
    {
      name: "Joseph McFall",
      role: "CTO at Google",
      message:
        "You have many examples that can be used to create a fast prototype for your team.",
      title: "Efficient Collaborating",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    },
  ];

  return (
    <>
      <div className="container mx-auto relative p-4">
        <h2 className="text-gray-900 text-5xl mb-4 font-normal ">
          Board of Directors
        </h2>
        <div className="flex flex-col items-center">
        <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4"
      style={{ maxWidth: '1000px', maxHeight: '1200px' }}
    >
      <img
        className="object-cover w-full rounded-t-lg h-128 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
        src="https://media.istockphoto.com/id/530281695/photo/confident-businessman-sitting-at-conference-table.jpg?s=612x612&w=0&k=20&c=BZAsR4WFS3oN_CnzdjfAkcPllQejf_eImEghMB5PiEc="
        alt="Noteworthy technology acquisitions 2021"
      />
      <div className="flex flex-col justify-between p-6 leading-normal">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-4 text-lg font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </a>
          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            {testimonials.map((testimonial, index) => (
              <figure
                key={index}
                className={`flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-lg dark:bg-gray-800 dark:border-gray-700 ${
                  index % 2 === 0 ? "md:rounded-ss-lg md:border-e" : ""
                }`}
              >
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.title}
                  </h3>
                  <p className="my-4">{testimonial.message}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img
                    className="rounded-full w-9 h-9"
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
