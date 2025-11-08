import { useState, useEffect } from 'react';
import Annimatedbg from "./Annimatedbg";
import Navbar from "./Navbar";

function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = ' AM FRONTEND DEVELOPER';
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

  return (
    <section className="relative bg-black text-white" style={{ height: "100dvh" }}>
      <Annimatedbg
        particleColors={['#ffffff', '#00ffff']}
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
      <div className="h-full flex flex-col  md:px-0 md:ps-72 items-center md:items-start justify-center">
        <p className=" font-name text-2xl md:text-2xl mb-1">MAHESH PAATIL</p> 
         <div className='flex'>
          <img className='w-9 md:w-12 my-3 me-2' src='./Svg/html.svg'></img>
          <img className='w-9 md:w-12 my-3 me-2' src='./Svg/css.svg'></img>
          <img className='w-9 md:w-12 my-3 me-2' src='./Svg/Js.svg'></img>
          <img className='w-9 md:w-12 my-3 me-2' src='./Svg/react.svg'></img>
          <img className='w-9 md:w-12 my-3 me-2' src='./Svg/tailwind.svg'></img>
          <img className='w-9 md:w-12 my-3 me-2' src='./Svg/redx.svg'></img>
       <div className='relative '>
  <img className='w-9 md:w-12 my-3 me-2' src='./Svg/Git.svg' />
  <img 
    className='absolute  bottom-32 md:bottom-16 -right-1 md:-right-16 rotate-[33deg] w-32 max-w-none'
    src='./Svg/Hover.gif' 
    alt="hover"
  />
</div>


        </div>
        <p className="font-black text-2xl md:text-5xl mt-1 mb-6">I{displayedText}</p>
  <p>
   <button className="px-20 py-2 font-name font-medium text-white border-2 border-gray-400 rounded-lg   h-12">
      <span className="flex items-center justify-center  ">
        Resume
      </span>
    
    </button>
</p>



      </div>
    </section>
  );
}

export default Hero;
