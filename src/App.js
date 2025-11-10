import React from 'react';
import Hero from './Herosectioncomponet/Hero';
import About from './Component/About';
import Project from './Component/Project';
import Skill from './Component/Skill';
import SocialIcons from './Component/SocialIcons';
import Contact from './Component/Contact';
import Sidebar from './Component/Sidebar'; 

function App() {
  return (
    <div className="overflow-hidden bg-black relative ">
      <Sidebar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <SocialIcons />
    </div>
  );
}

export default App;
