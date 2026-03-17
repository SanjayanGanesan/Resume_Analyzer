import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Technical", value: 80 },
  { subject: "Leadership", value: 60 },
  { subject: "Communication", value: 70 },
  { subject: "Problem Solving", value: 85 },
  { subject: "Domain Knowledge", value: 65 },
];

function SkillAnalysis() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
      <h3 className="text-lg font-semibold mb-5">Skill Analysis</h3>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid />

            <PolarAngleAxis dataKey="subject" />

            <Radar
              name="Skills"
              dataKey="value"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SkillAnalysis;
