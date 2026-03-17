import React from "react";

function MatchScore() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm">
      <div className="text-6xl font-bold text-green-500">78%</div>

      <p className="text-gray-500 mt-2">Match</p>

      <div className="mt-6 bg-green-100 text-green-600 px-4 py-2 rounded-full inline-block">
        Strong Match
      </div>
    </div>
  );
}

export default MatchScore;
