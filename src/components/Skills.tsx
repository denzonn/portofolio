import { useState } from "react";
import bootstrap from "../assets/bootstrap.svg";
import typescript from "../assets/typescript.png";
import typescriptfill from "../assets/typescript-fill.png";
import bootstrapfill from "../assets/bootstrap-fill.svg";


const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "Intermediate",
      count: 90,
    },
    {
      logo: "logo-tailwind",
      level: "Beginner",
      count: 40,
    },
    {
      logo: "typescript",
      level: "Intermediate",
      count: 80,
    },
    {
      logo: "logo-react",
      level: "Intermediate",
      count: 80,
    },
    {
      logo: "logo-vue",
      level: "Beginner",
      count: 80,
    },
    {
      logo: "logo-figma",
      level: "Intermediate",
      count: 80,
    },
    {
      logo: "bootstrap",
      level: "Intermediate",
      count: 80,
    },
  ];

  const [bootstrapImageSrc, setBootstrapImageSrc] = useState(bootstrap);
  const [typescriptImageSrc, settypescriptImageSrc] = useState(typescript);

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="grid lg:grid-cols-4 grid-cols-2 mt-12 lg:gap-10 gap-x-0 gap-y-4 lg:px-44 place-items-center">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative lg:min-w-[10rem] min-w-[4rem] lg:max-w-[16rem] max-w-[10rem] bg-gray-900 lg:p-10 p-4 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600" onMouseEnter={() => {
                    if (skill.logo === "bootstrap" || skill.logo === "typescript") {
                      setBootstrapImageSrc(bootstrapfill);
                      settypescriptImageSrc(typescriptfill)
                    }
                  }}
                  onMouseLeave={() => {
                    if (skill.logo === "bootstrap" || skill.logo === "typescript") {
                      setBootstrapImageSrc(bootstrap);
                      settypescriptImageSrc(typescript); 
                    }
                  }}>
                  {skill.logo === "bootstrap" ? (
                    <img src={skill.logo === "bootstrap" ? bootstrapImageSrc : ""} alt="" className="w-14 h-14" />
                  ) : (
                    skill.logo === 'typescript' ? <img src={skill.logo === "typescript" ? typescriptImageSrc : ""} alt="" className="w-14 h-14" /> : <ion-icon name={skill.logo}></ion-icon>
                  )}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
