import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { SiHyperskill } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import Logo from '../Herosectioncomponet/Logo';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sidebarOpen', isOpen);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

const toggleSidebar = () => {
  setIsOpen((prev) => {
    const newState = !prev;
    localStorage.setItem('sidebarOpen', newState); 
    return newState;
  });
};

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView();
      setIsOpen(false); 
    }
  };

  return (
    <>
      <div
        className="fixed top-10 right-10  hover:bg-black bg-black z-[60] p-1.5 rounded cursor-pointer"
        onClick={toggleSidebar}
      >
        <div className="flex flex-col gap-[3px] w-5">
          <div
            className={`h-[4px] w-[10px] bg-yellow-500 rounded-full transition-all duration-300 origin-right
              ${isOpen ? 'rotate-[225deg] -translate-x-[6px] -translate-y-[1px]' : ''}`}
          ></div>
          <div
            className={`h-[4px] w-full bg-white rounded-full transition-all duration-300
              ${isOpen ? '-rotate-45' : ''}`}
          ></div>
          <div
            className={`h-[4px] w-[10px] bg-yellow-500 rounded-full transition-all duration-300 place-self-end origin-left
              ${isOpen ? 'rotate-[225deg] translate-x-[6px] translate-y-[1px]' : ''}`}
          ></div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full px-6 md:px-7 flex flex-col bg-black bg-opacity-85 justify-between py-4  z-50 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col justify-between py-6 pb-72 md:pb-10 items-start flex-1">

          <button
            onClick={() => handleScroll('hero')}
            className="text-white flex justify-center items-center text-xl hover:text-blue-400 transition-colors cursor-pointer bg-transparent border-none"
          >
            <Logo /> 
            <span className="text-center pt-2 adds font-name text-lg md:hidden">ahesh</span>
          </button>

          <button
            onClick={() => handleScroll('about')}
            className="text-white text-2xl flex justify-center items-center cursor-pointer transform transition-all duration-300
             hover:text-lime-200 hover:scale-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-transparent border-none"
          >
            <FaUser /> 
            <span className="ps-4 text-center font-name text-lg md:hidden">User</span>
          </button>

          <button
            onClick={() => handleScroll('skills')}
            
            className="text-white text-2xl flex justify-center items-center cursor-pointer transform transition-all duration-300
             hover:text-lime-200 hover:scale-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-transparent border-none"
          >
            <SiHyperskill /> 
            <span className="ps-4 text-center font-name text-lg md:hidden">Skill</span>
          </button>

          <button
            onClick={() => handleScroll('projects')}
            className="text-white text-2xl flex justify-center items-center cursor-pointer transform transition-all duration-300
             hover:text-lime-200 hover:scale-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-transparent border-none"
          >
            <GrProjects /> 
            <span className="ps-4 text-center font-name text-lg md:hidden">Project</span>
          </button>

          <button
            onClick={() => handleScroll('contact')}
            className="text-white text-2xl flex justify-center items-center cursor-pointer transform transition-all duration-300
             hover:text-lime-200 hover:scale-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-transparent border-none"
          >
            <FaEnvelope /> 
            <span className="ps-4 text-center font-name text-lg md:hidden">Contact</span>
          </button>

        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0  backdrop-blur-sm  bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
