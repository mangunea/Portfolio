import {
Mail,
} from "lucide-react";

import githubIcon from "./assets/githubicon.png";
import linkedinIcon from "./assets/linkedinicon.png";

function Header() {
  return (
  <header>
    <section className="relative min-h-screen font-[Open Sans]">
      
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

  <div className="absolute inset-0 bg-white/20 mix-blend-lighten"></div>
  
    <nav className="relative z-10 w-full px-8 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

         <h1 className="text-1xl text-[black] font-semibold">
          Portfolio</h1>

        <nav className="md:flex gap-12 text-1xl text-[black]">
          <a href="#about" className="hover:text-black-500 transition">
            About</a>
            <a href="#skills" className="hover:text-black-500 transition">
            Skills</a>
          <a href="#projects" className="hover:text-black-500 transition">
            Projects</a>

        </nav>
      </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-6 max-w-2xl mx-auto">
    
        <h1 className="font-[Roboto] opacity-90 font-semibold text-5xl md:text-6xl text-[#2c3d55] mb-4">
          Hi, I'm Alessandra</h1>

        <h3 className="text-2xl text-[#2c3d55] mb-4">
          Cloud Computing Student & Problem Solver</h3>

        <p className="text-1xl leading-relaxed text-[#2c3d55] mb-13">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <a href="#projects" className="bg-[#02011a] text-white px-4 py-1.5 rounded-md text-l shadow-md hover:opacity-70 hover:cursor-pointer transition">
           VIEW MY WORK
         </a>

          <a href="https://www.linkedin.com/in/alessandra-mangune-657799330/" target="_blank" rel="noreferrer" className="text-white border border-gray-300 px-4 py-1.5 rounded-md text-l hover:bg-[#2c3d55] hover:cursor-pointer transition">
            GET IN TOUCH
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/mangunea" target="_blank" rel="noreferrer">
      <img src={githubIcon} alt="Github" width="23" />
      </a>
      <a href="https://www.linkedin.com/in/alessandra-mangune-657799330/" target="_blank" rel="noreferrer">
      <img src={linkedinIcon} alt="Linkedin" width="23" />
      </a>
      </div>
      </div>
      
    </section>
  </header>
  );
}

export default Header;