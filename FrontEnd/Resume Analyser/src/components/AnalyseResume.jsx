import React, { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Sparkles } from "lucide-react";

import MatchScore from "./MathScore";
import SkillsFound from "./SkillsFound";
import MissingSkills from "./MissingSkills";
import AiSuggestions from "./AiSuggestions";
import SkillAnalysis from "./SkillAnalysis";

import "./AnalyseResume.css";
import SubmitButtons from "./SubmitButtons";

function AnalyseResume() {
  const fileInputRef = useRef();

  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleBrowse = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleAnalyze = () => {
    if (file && jobDesc.trim() !== "") {
      setShowResult(true);
    }
  };

  const isEnabled = file && jobDesc.trim() !== "";

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 desktop-padding">
      <div className="bg-white w-full max-w-275 rounded-xl shadow-md p-10 space-y-12 card-container">
        {/* Upload Resume */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Upload Resume
          </h2>

          <p className="text-gray-500 mt-1 mb-6">
            Upload your resume in PDF format
          </p>

          {!file ? (
            <div
              onClick={handleBrowse}
              className="border-2 border-dashed border-gray-300 rounded-xl
              flex flex-col items-center justify-center text-center
              py-16 cursor-pointer hover:border-pink-400 transition upload-box"
            >
              <div className="bg-pink-100 p-4 rounded-full mb-4 text-3xl text-pink-600">
                <FiUploadCloud />
              </div>

              <p className="text-lg font-medium text-gray-700">
                Upload Resume PDF
              </p>

              <p className="text-gray-500 mt-1">
                Drag and drop your resume or
                <span className="text-pink-600 font-medium"> browse</span>
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Supports PDF files up to 10MB
              </p>

              <input
                type="file"
                accept="application/pdf"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between file-card">
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-lg text-pink-600 text-2xl">
                  <AiOutlineFilePdf />
                </div>

                <div>
                  <p className="font-medium text-gray-800">{file.name}</p>

                  <p className="text-gray-500 text-sm">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>

              <button
                onClick={removeFile}
                className="text-gray-500 hover:text-red-500 text-2xl"
              >
                <IoClose />
              </button>
            </div>
          )}
        </div>

        {/* Job Description */}

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Job Description
          </h2>

          <p className="text-gray-500 mt-1 mb-5">
            Paste the job description you want to compare against
          </p>

          <textarea
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            className="w-full h-55 border border-gray-300 rounded-xl p-4
            focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none job-textarea"
            placeholder={`Paste the complete job description here...

Example:
We are looking for a Senior Full Stack Developer with experience in React, Node.js, and cloud technologies...`}
          />
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={!isEnabled}
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold transition
          
          ${
            isEnabled
              ? "bg-pink-500 hover:bg-pink-600"
              : "bg-gray-300 cursor-not-allowed"
          }
          `}
        >
          {/* <Sparkles size={20} /> */}
          Analyze Resume with AI
        </button>

        {/* Results */}
        {showResult && (
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-6 result-grid">
              <MatchScore />
              <SkillsFound />
              <MissingSkills />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-6 result-grid-2">
              <AiSuggestions />
              <SkillAnalysis />
              <SubmitButtons />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalyseResume;
