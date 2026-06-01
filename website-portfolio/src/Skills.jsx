function Skills() {

    const skillCards = [

        {title: "Frontend",  skills: ["React", "TailwindCSS", "TypeScript", "XAML"] }, 
        {title: "Backend", skills: ["Node.js", "Python", "MongoDB"] },
        {title: "Design", skills: ["Figma", "Responsive Design", "Krita"] }

    ];

    return(

        <section id="skills" className="px-6 py-28">

        <div className="max-w 7xl mx-auto">
            
            <h2 className="text-5xl font-semibold text-center mb-15">
                Skills & Technologies</h2>


        <div>
            {skillCards.map((card, index) => (
                <div key={index}>
                    <h3>
                    {card.title}
                    </h3>

                    <ul>
                        {card.skills.map((skill, i) => (
                            <li key={i}>- {skill}  </li>
                        )
                        )}
                    </ul>
                </div>

            ))}
        </div>

        </div>

        </section>

    );

}

export default Skills;