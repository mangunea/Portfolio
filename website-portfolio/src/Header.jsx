


function Header() {
  return (
  <header>
    <section className="font-[Open Sans] min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="font-[Roboto] font-medium text-4xl md:text-6xl text-[#02011a] mb-8 mt-18">
          Hi, I'm Alessandra</h1>

        <h2 className="text-2xl text-gray-600 mb-8">
          Cloud Computing Student & Problem Solver</h2>

        <p className="text-1xl leading-relaxed text-black mb-12">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button className="bg-[#02011a] text-white px-4 py-1.5 rounded-md text-l shadow-md hover:opacity-70 hover:cursor-pointer transition">
            VIEW MY WORK
          </button>

          <button className="border border-gray-300 px-4 py-1.5 rounded-md text-l hover:bg-gray-100 hover:cursor-pointer transition">
            GET IN TOUCH
          </button>
        </div>
      
      </div>
    </section>
  </header>
  );
}

export default Header;