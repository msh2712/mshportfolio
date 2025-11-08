import React from 'react';
import Annimatedbg from './Herosectioncomponet/Annimatedbg';
import Logo from './Herosectioncomponet/Logo';
import Navbar from './Herosectioncomponet/Navbar';
import Hero from './Herosectioncomponet/Hero';
import About from './Component/About';
import Project from './Component/Project'
import Skill from './Component/Skill';
import Sidebar from './Component/Sidebar';
import SocialIcons from './Component/SocialIcons';
import Contact from './Component/Contact';

function App() {
  return (
    <div className='overflow-hidden bg-black'>
       <Hero/>
       <About/>
       <Skill/>
       <Project/>
       <Contact/>
       <SocialIcons/>
    </div>
  );
}

export default App;
