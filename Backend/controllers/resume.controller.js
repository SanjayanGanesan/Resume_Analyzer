const { extractTextFromFile } = require("../services/resumeparser.services");
const { extractSkills } = require("../services/skillsExtractor.services");
const { matchingServices } = require("../services/matching.services");

async function analyze(req, res) {
  const resumeFile = req.file;
  const jobDescription = req.body.jobDescription;
  const jobRole = req.body.jobRole;

  console.log(req.file, "Request");

  if (!resumeFile) {
    return res.status(400).json({
      status: 0,
      message: "Resume file is required",
    });
  }

  try {
    //console.time("Parsing Time");

    const extractedFile = await extractTextFromFile(resumeFile);

    if (extractedFile) {
      const ResumeSkills = extractSkills(extractedFile);
      const JobSkills = extractSkills(jobDescription);

      const MatchingSkills = matchingServices(ResumeSkills,JobSkills)

      return res.status(200).json({
        status: 1,
        message: "Resume received successfully",
        resume: resumeFile.originalname,
        jobDescription,
        jobRole,
        resumeSkills: ResumeSkills,
        extractedText: extractedFile.substring(0, 15000),
        ...MatchingSkills,
      });
    }

    //console.timeEnd("Parsing Time");
    //const extractedFile = await extractTextFromFile(resumeFile);
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: "Error processing file",
      error: error.message,
    });
  }
}

module.exports = { analyze };
