import {
  Code2,
  Database,
  Palette
} from "lucide-react";


function Skills() {

    const skillCards = [
,
        {title: "Frontend", icon: <Code2 size={22}/>, skills: ["React", "TailwindCSS", "TypeScript", "XAML"] }, 
        {title: "Backend", icon: <Database size={22}/>, skills: ["Node.js", "Python", "MongoDB"] },
        {title: "Design", icon: <Palette size={22}/>, skills: ["Figma", "Responsive Design", "Krita"] }

    ];

    return(

        <section id="skills" className="px-6 py-25 bg-[#2c3d55] opacity-100">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-semibold text-center text-[#f5f5f5] mb-15">
                Skills & Technologies</h2>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-25">
            {skillCards.map((card, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:border-grey">
                    <div className="flex text-[#f5f5f5] items-center gap-2 mb-1">
                        {card.icon}
                    <h3 className="text-2xl font-semibold mb-2">
                    {card.title}
                    </h3>
                </div>
                    <ul className="space-y-1 text-1xl text-[#f5f5f5]">
                        {card.skills.map((skill, i) => (
                            <li key={i}>* {skill}  </li>
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