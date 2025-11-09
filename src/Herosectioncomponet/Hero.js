import { useState, useEffect } from "react";
import Annimatedbg from "./Annimatedbg";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = " AM FRONTEND DEVELOPER";
  const typingSpeed = 100;
  const deletingSpeed = 100;
  const pauseDuration = 1000;

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, index));
        index--;
        if (index < 0) {
          isDeleting = false;
          index = 0;
          timeoutId = setTimeout(type, pauseDuration);
        } else {
          timeoutId = setTimeout(type, deletingSpeed);
        }
      } else {
        setDisplayedText(fullText.substring(0, index));
        index++;
        if (index > fullText.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, pauseDuration);
        } else {
          timeoutId = setTimeout(type, typingSpeed);
        }
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  const techIcons = [
    "./Svg/html.svg",
    "./Svg/css.svg",
    "./Svg/Js.svg",
    "./Svg/react.svg",
    "./Svg/tailwind.svg",
    "./Svg/redx.svg",
    "./Svg/Git.svg",
  ];

  return (
    <section
      className="relative bg-black text-white"
      style={{ height: "100dvh" }}
    >
      <Annimatedbg
        particleColors={["#ffffff", "#00ffff"]}
        particleCount={400}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <Navbar />

      <div className="h-full flex flex-col md:px-0 md:ps-72 items-center md:items-start justify-center">
        <p className="font-name mt-36 md:mt-0 text-xl md:text-2xl mb-1">
          MAHESH PAATIL
        </p>

        <div className="flex items-center">
          <div
            className="w-[260px] md:w-[380px] cursor-pointer"
            onMouseEnter={(e) =>
              e.currentTarget.querySelector(".swiper")?.swiper.autoplay.stop()
            }
            onMouseLeave={(e) =>
              e.currentTarget.querySelector(".swiper")?.swiper.autoplay.start()
            }
          >
            <Swiper
              spaceBetween={3} 
              slidesPerView={5}
              loop={true}
              allowTouchMove={false}
              speed={2500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {[...techIcons, ...techIcons, ...techIcons].map((tech, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="w-9 md:w-12 my-3 me-2 object-contain"
                    src={tech}
                    alt="Tech logo"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="relative">
            <img
              className="absolute bottom-28 md:bottom-12 right-0 md:-right-24 rotate-[33deg] w-32 max-w-none"
              src="./Svg/Hover.gif"
              alt="Hover effect animation"
            />
          </div>
        </div>

        <p className="font-black text-2xl md:text-5xl mt-1 mb-6">
          I{displayedText}
        </p>

        {/* Resume Button */}
        <p>
          <button className="px-12 md:px-20 py-2 font-name font-medium text-white border-2 border-gray-400 rounded-lg h-12">
            <span className="flex items-center justify-center">Resume</span>
          </button>
        </p>
      </div>
    </section>
  );
}

export default Hero;
