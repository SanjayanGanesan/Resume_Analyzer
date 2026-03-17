import React from "react";
import { FiDownload } from "react-icons/fi";
import { AiOutlineReload } from "react-icons/ai";

function SubmitButtons() {
  return (
    <div className="flex gap-4 submit-buttons">
      {/* Download Button */}
      <button
        className="flex items-center gap-2 px-6 py-3 rounded-lg 
        bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        <FiDownload size={18} />
        Download Report
      </button>

      {/* Reanalyse Button */}
      <button
        className="flex items-center gap-2 px-6 py-3 rounded-lg 
        bg-white text-black border border-gray-300 
        font-medium hover:bg-gray-100 transition"
      >
        <AiOutlineReload size={18} />
        Reanalyze
      </button>
    </div>
  );
}

export default SubmitButtons;
