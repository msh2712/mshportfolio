import { useState, useEffect } from "react";

function Skill() {
  const skills = [
    { name: "JavaScript", level: 80, from: "#FACC15", via: "#F87171", to: "#EC4899" },
    { name: "React", level: 90, from: "#60A5FA", via: "#06B6D4", to: "#22C55E" },
    { name: "Toolkit", level: 90, from: "#22C55E", via: "#84CC16", to: "#14B8A6" },
    { name: "Tailwind", level: 80, from: "#A78BFA", via: "#C084FC", to: "#EC4899" },
    { name: "Bootstrap", level: 70, from: "#F472B6", via: "#F87171", to: "#FACC15" },
    { name: "Github", level: 70, from: "#F97316", via: "#F87171", to: "#EC4899" },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const leftSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const rightSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className="w-full px-5 pt-10 md:pt-20 mt-8 md:mt-7 bg-black">
      <h2 className="relative text-5xl flex font-semibold font-name text-start ps-5 md:ps-36 mb-16 md:mb-20 text-white">
        Skills
        <div className="absolute -top-2 left-44 md:left-[300px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="30"
            height="30"
            className="animate-rotate-left"
          >
            <defs>
              <linearGradient id="starGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF7C57" />
                <stop offset="50%" stopColor="#9B5DE5" />
                <stop offset="100%" stopColor="#3A86FF" />
              </linearGradient>
            </defs>

            <path
              d="M256 0
                 C256 100 100 256 0 256
                 C100 256 256 412 256 512
                 C256 412 412 256 512 256
                 C412 256 256 100 256 0Z"
              fill="url(#starGradient)"
            />
          </svg>
        </div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 px-5 md:px-36">
        <div className="space-y-10">
          {leftSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} loaded={loaded} index={index} />
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-10">
          {rightSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} loaded={loaded} index={index + leftSkills.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

// SkillBar Component
function SkillBar({ skill, loaded, index }) {
  const gradientId = `grad-${index}`;

  return (
    <div className="group">
      <div className="flex justify-between mb-3">
        <span className="text-xl font-semibold font-about text-white">{skill.name}</span>
        <span className="text-xl font-semibold font-about text-white">{skill.level}%</span>
      </div>

      <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden shadow-inner">
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
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={skill.from} />
                <stop offset="50%" stopColor={skill.via} />
                <stop offset="100%" stopColor={skill.to} />
              </linearGradient>
            </defs>

            <path
              d="M0 25 Q50 0 100 25 T200 25 T300 25 T400 25 T500 25 V50 H0 Z"
              fill={`url(#${gradientId})`}
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
