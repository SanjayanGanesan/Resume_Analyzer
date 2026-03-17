import React from "react";

function AISuggestions() {
  const suggestions = [
    "Add AWS cloud experience to highlight infrastructure knowledge",
    "Emphasize REST API development and architecture experience",
    'Include measurable achievements (e.g., "Improved performance by 40%")',
    "Add Docker containerization experience to match DevOps requirements",
    "Highlight team collaboration and Agile methodologies",
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
      <h3 className="text-lg font-semibold mb-5">AI Suggestions</h3>

      <ul className="space-y-3">
        {suggestions.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600">
            <span className="text-indigo-500 text-xl">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AISuggestions;
