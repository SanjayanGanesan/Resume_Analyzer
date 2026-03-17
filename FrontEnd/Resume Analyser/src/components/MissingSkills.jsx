import React from "react";

function MissingSkills() {
  const skills = ["AWS", "Docker", "Kubernetes", "CI/CD"];

  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Missing Skills</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MissingSkills;
