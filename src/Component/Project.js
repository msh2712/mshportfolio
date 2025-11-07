import React from "react";

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Ecomerce Website",
       titles: "Ecomerce Website",
      logo: "./Svg/react.svg",
      website: "#",
      techStack: ["./Svg/html.svg", "./Svg/tailwind.svg", "./Svg/react.svg", "./Svg/redx.svg" , "./Svg/Git.svg"],
      project: "01",
    },
    {
      id: 2,
      title: "MaheshMovie webApk",
       titles: "MaheshMovie",
      logo: "https://via.placeholder.com/150x150.png?text=MS",
      website: "#",
       techStack: ["./Svg/html.svg", "./Svg/tailwind.svg", "./Svg/react.svg", "./Svg/redx.svg" , "./Svg/Git.svg"],
      project: "02",
    },
    {
      id: 3,
      title: "Live Weather webapk ",
       titles: "Live Weather  ",
      logo: "https://via.placeholder.com/150x150.png?text=ST",
      website: "#",
      techStack: ["./Svg/html.svg", "./Svg/css.svg", "./Svg/js.svg"],
      project: "03",
    },
  ];

  return (
    <div className="min-h-screen px-12 mt-14 md:mt-28 md:px-28 lg:px-64 bg-black flex items-center justify-center p-6">
      <div className="grid grid-cols-1 gap-16 w-full max-w-6xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative py-5 mb-10 md:mb-12 bg-[#0F0F0F] text-white rounded-[50px] shadow-lg  flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 duration-300"
          >
            <div className="absolute  -top-12 right-6   md:-top-20 md:right-6 text-[60px] md:text-[120px] opacity-5 font-bold">
              {card.project}
            </div>

            <div className=" w-full px-8 py-3  pt-5 md:py-10  md:ps-20 md:w-[400px] h-[330px] md:h-[420px] flex items-center justify-center rounded-t-[50px] md:rounded-l-[50px] md:rounded-tr-none">
            <div className="bg-orange-400 rounded-3xl w-full h-full"></div>    
            </div>

            <div className="p-10 md:ps-5 pb-5 pt-3 md:pt-0 md:h-64 flex flex-col items-start justify-between">
              <h2 className="hidden md:block font-semibold text-2xl md:text-4xl mb-2">
                {card.title}
              </h2>
                <h2 className="block md:hidden font-semibold text-2xl md:text-4xl mb-2">
                {card.titles}
              </h2>
              <p className="text-[#4CC3A3] py-3 md:py-0 uppercase tracking-widest text-xs underline underline-offset-8 cursor-pointer mb-4">
                Visit the website
              </p>
             <div>
              <p className="text-[#4CC3A3] uppercase text-xs tracking-widest mb-2">
                Tech Stack
              </p>
              <div className="flex gap-3">
                {card.techStack.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    alt="tech"
                    className="w-8 h-8 object-contain"
                  />
                ))}
              </div>
              </div>
            </div>
            <p className="absolute font-name right-24 -top-1 md:right-40 md:-top-6">PROJECT</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
