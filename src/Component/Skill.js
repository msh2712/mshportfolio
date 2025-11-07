import { useState } from "react";
import { useEffect } from "react";

function Skill() {

    const skills = [ { name: "JavaScript", level: 80, color: "fill-yellow-400" },
         { name: "React", level: 90, color: "fill-blue-500" }, 
         { name: "Toolkit", level: 90, color: "fill-green-500" },
         { name: "Tailwind", level: 80, color: "fill-teal-400" },    
         { name: "Bootstrap", level: 70, color: "fill-indigo-500" }, 
         { name: "Github", level: 70, color: "fill-red-500" },
        ];
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const leftSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const rightSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className="w-full px-5 py-20 mt-14 md:mt-7 bg-black">
      <h2 className="text-5xl font-semibold font-name text-start ps-5 md:ps-36 mb-16 text-white">
      Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 px-5 md:px-36">
        {/* Left column */}
        <div className="space-y-10">
          {leftSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} loaded={loaded} />
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-10">
          {rightSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} loaded={loaded} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Extract SkillBar as a reusable component
function SkillBar({ skill, loaded }) {
  return (
    <div className="group">
      {/* Skill name & percentage */}
      <div className="flex justify-between mb-3">
        <span className="text-xl font-semibold text-white">{skill.name}</span>
        <span className="text-xl font-semibold text-white">{skill.level}%</span>
      </div>

      <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden shadow-inner">
        {/* Filled part with wave */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden rounded-full"
          style={{
            width: loaded ? `${skill.level}%` : "0%",
            transition: "width 1.5s ease-out",
          }}
        >
          <svg
            className="absolute top-0 left-0 w-[200%] h-full"
            viewBox="0 0 500 50"
            preserveAspectRatio="none"
          >
            <path
              d="M0 25 Q50 0 100 25 T200 25 T300 25 T400 25 T500 25 V50 H0 Z"
              className={skill.color}
            >
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values="
                  M0 25 Q50 0 100 25 T200 25 T300 25 T400 25 T500 25 V50 H0 Z;
                  M0 25 Q50 50 100 25 T200 25 T300 25 T400 25 T500 25 V50 H0 Z;
                  M0 25 Q50 0 100 25 T200 25 T300 25 T400 25 T500 25 V50 H0 Z
                "
              />
            </path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Skill;
