
function Projects() {

    const projects = [

        { title: "Project 1 ",
             description: "Blah blah yap yap yap yap yap taddadlooo",
            tech: ["React", "Nani", "URMOM"], },
        { title: "Project 2 ",
             description: "Blah blah yap yap yap yap yap taddadlooo",
            tech: ["React", "Nani", "URMOM"], },
        { title: "Project 3 ",
             description: "Blah blah yap yap yap yap yap taddadlooo",
            tech: ["React", "Nani", "URMOM"], },
    ];

    return(

        <section id="projects">
            <div>
                <h2>Featured Projects</h2>


                <div key={index}>
                    {projects.map((projects, index) => (

                    <div>
                        <h1>{Projects.title}</h1>


                    </div>

                    ))}
                    

                </div>

            </div>
        </section>

    );

}

export default Projects;