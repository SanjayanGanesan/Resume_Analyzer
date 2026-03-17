import React from "react";

function SkillsFound() {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "REST APIs",
    "Git",
    "TypeScript",
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Skills Found</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsFound;
