import {
  ExternalLink,
} from "lucide-react";

function Projects() {


    const projects = [

        { title: "Project 1 ",
             description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            tech: ["React", "HTML", "Tailwind CSS", "Node.js"], },
        { title: "Project 2 ",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            tech: ["Godot", "C#", "Krita"], },
        { title: "Project 3 ",
             description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            tech: ["Vite", "Java", "Node.js"], },
    ];

    return(

        <section id="projects" className="px-6 py-28">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-semibold text-center mb-15">
                    Featured Projects</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {projects.map((projects, index) => (

                    <div key={index} className="border border-gray-300 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-3"
                        >{projects.title}</h3>

                        <p className="text-gray-600 text-1xl leading-relaxed mb-6">
                        {projects.description}</p>

                         <div className="flex flex-wrap gap-4 mb-5">
                        {projects.tech.map((tech, i) => (
                        <span key={i}
                    className="bg-gray-200 px-4 py-2 rounded-full text-1">
                    {tech}
                  </span>
                ))}
              </div>

                <button className="flex items-center gap-2 hover:underline hover: cursor-pointer text-1xl">
                    View Project
                    <ExternalLink size={15} />
                </button>
                    </div>
                    ))}
                </div>
            </div>
        </section>

    );

}

export default Projects;