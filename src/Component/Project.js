import React from "react";

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Ecommerce Website",
      titles: "Ecommerce Website",
      logo: "./Svg/16548.jpg",
      website: "#",
      techStack: ["./Svg/html.svg", "./Svg/tailwind.svg", "./Svg/react.svg", "./Svg/redx.svg", "./Svg/Git.svg"],
      project: "01",
    },
    {
      id: 2,
      title: "MaheshMovie webApk",
      titles: "MaheshMovie",
      logo: "./Svg/9568482.jpg",
      website: "#",
      techStack: ["./Svg/html.svg", "./Svg/tailwind.svg", "./Svg/react.svg", "./Svg/redx.svg", "./Svg/Git.svg"],
      project: "02",
    },
    {
      id: 3,
      title: "Live Weather webapk",
      titles: "Live Weather",
      logo: "./Svg/2043631.jpg",
      website: "#",
      techStack: ["./Svg/html.svg", "./Svg/css.svg", "./Svg/Js.svg"],
      project: "03",
    },
  ];

  return (
    <div className="min-h-screen px-12 mt-14 md:mt-28 md:px-28 lg:px-64 bg-black flex flex-col items-center justify-center p-6">
      <div className="flex justify-end items-end w-full">
        <h2 className="relative px-8 md:px-0 text-4xl md:text-5xl mt-11 font-semibold font-name mb-16 md:mb-28 text-white">
          Project
          <div className="absolute -top-4 -left-0 md:-left-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="30"
              height="30"
              className="animate-rotate-left"
            >
              <defs>
                <linearGradient id="starGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF7C57" />
                  <stop offset="50%" stopColor="#9B5DE5" />
                  <stop offset="100%" stopColor="#3A86FF" />
                </linearGradient>
              </defs>
              <path
                d="M256 0
                   C256 100 100 256 0 256
                   C100 256 256 412 256 512
                   C256 412 412 256 512 256
                   C412 256 256 100 256 0Z"
                fill="url(#starGradient)"
              />
            </svg>
          </div>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-16 w-full max-w-6xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative py-5 mb-10 md:mb-12 bg-[#0F0F0F] text-white rounded-[50px] shadow-lg flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 duration-300"
          >
            {/* Project number background */}
            <div className="absolute animate-pulse -top-12 right-6 text-neutral-700 md:-top-20 md:right-6 text-[60px] md:text-[120px] opacity-5 font-bold">
              {card.project}
            </div>

            {/* Poster / Logo Section */}
            <div className="w-full px-8 py-3 pt-5 md:py-10 md:ps-20 md:w-[400px] h-[300px] md:h-[420px] flex items-center justify-center rounded-t-[50px] md:rounded-l-[50px] md:rounded-tr-none overflow-hidden">
              <img
                src={card.logo} // your poster/logo
                alt={card.title}
                className="w-full drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] rounded-xl  h-full object-cover"
              />
            </div>


            {/* Card Content */}
            <div className="p-10 md:ps-5 pb-5 pt-3 md:pt-0 md:h-64 flex flex-col items-start justify-between">
              <h2 className="hidden md:block font-project font-bold text-2xl md:text-4xl mb-2">
                {card.title}
              </h2>
              <h2 className="block md:hidden font-project font-bold text-xl md:text-4xl mb-2">
                {card.titles}
              </h2>

              <a
                href={card.website}
                className="text-white hover:text-blue-300 font-about py-1 md:py-0 uppercase tracking-widest text-xs underline underline-offset-8 cursor-pointer mb-4"
              >
                Visit the website
              </a>

              <div>
                <p className="text-white mt-1 font-about uppercase text-xs tracking-widest mb-2 md:mb-4">
                  Tech Stack
                </p>
                <div className="flex gap-3">
                  {card.techStack.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt="tech"
                      className="w-6 md:w-8 h-6 md:h-8 object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating PROJECT text */}
            <p className="absolute animate-color-cycle font-name right-24 -top-1 md:right-40 md:-top-6">
              PROJECT
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
