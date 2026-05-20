function Navbar() {
  return (
    <navbar>
      <header className="w-full border-b border-gray-300 fixed">

      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
         <h1 className="text-1xl font-semibold">
          Portfolio</h1>

        <nav className="md:flex gap-12 text-1xl">
          <a href="#about" className="hover:text-gray-500 transition">
            About</a>
            <a href="#skills" className="hover:text-gray-500 transition">
            Skills</a>
          <a href="#projects" className="hover:text-gray-500 transition">
            Projects</a>

        </nav>
      </div>
      </header>

    </navbar>
  
  );
}

export default Navbar;