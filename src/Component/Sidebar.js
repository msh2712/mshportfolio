// Header.jsx
import React, { useState, useEffect } from 'react';
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import Logo from '../Herosectioncomponet/Logo';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    return saved === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('sidebarOpen', isOpen);
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
  if (isOpen) {
    // Lock scroll
    document.body.style.overflow = 'hidden';
  } else {
    // Restore scroll
    document.body.style.overflow = '';
  }

  // Cleanup when component unmounts
  return () => {
    document.body.style.overflow = '';
  };
}, [isOpen]);


  return (
    <>
      <div
        className="fixed top-10 right-10 z-50 p-1.5 rounded cursor-pointer"
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
        className={`fixed top-0 left-0 h-full w-[90px]  flex flex-col bg-black justify-between py-4 z-40 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} 
      >
        <div className="flex flex-col justify-between py-6 pb-72 md:pb-10  items-center flex-1">
            <a href="#about" className="text-white text-xl hover:text-blue-400 transition-colors">
            <Logo/>
          </a>
          <a href="#about" className="text-white text-2xl hover:text-blue-400 transition-colors">
            <FaUser />
          </a>
          <a href="#skills" className="text-white text-2xl hover:text-blue-400 transition-colors">
            <FaCode />
          </a>
          <a href="#projects" className="text-white text-2xl hover:text-blue-400 transition-colors">
            <FaProjectDiagram />
          </a>
          <a href="#contact" className="text-white text-2xl hover:text-blue-400 transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Overlay */}
     {/* Overlay */}
{isOpen && (
  <div
    className="fixed top-0 left-[105px] right-0  bottom-0 bg-black bg-opacity-50 z-30"
    onClick={toggleSidebar}
  ></div>
)}

      
    </>
  );
}

export default Sidebar;
