import {
Mail,
} from "lucide-react";

import githubIcon from "./assets/githubicon.png";
import linkedinIcon from "./assets/linkedinicon.png";

function Header() {
  return (
  <header>
    <section className="font-[Open Sans] min-h-screen flex items-center justify-center px-6">
      
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

  <div class="absolute inset-0 bg-white/20 mix-blend-lighten"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-black text-center px-6 max-w-2xl">
        <h1 className="font-[Roboto] opacity-80 font-semibold text-3xl md:text-6xl text-[white] mb-6 mt-18">
          Hi, I'm Alessandra</h1>

        <h3 className="text-2xl text-white mb-8">
          Cloud Computing Student & Problem Solver</h3>

        <p className="text-1xl leading-relaxed text-white mb-12">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <a href="#projects" className="bg-[#02011a] text-white px-4 py-1.5 rounded-md text-l shadow-md hover:opacity-70 hover:cursor-pointer transition">
           VIEW MY WORK
         </a>

          <a href="https://www.linkedin.com/in/alessandra-mangune-657799330/" target="_blank" rel="noreferrer" className="text-white border border-gray-300 px-4 py-1.5 rounded-md text-l hover:bg-black hover:cursor-pointer transition">
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