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


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {skillCards.map((card, index) => (
                <div key={index} className="border border-gray-300 rounded-2xl p-8 bg-[#f5f5f5]">
                    <h3 className="text-2xl font-semibold">
                    {card.title}
                    </h3>

                    <ul className="space-y-1 text-gray-600 text-1xl">
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