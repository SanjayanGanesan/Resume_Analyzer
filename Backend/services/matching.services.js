const matchingServices = (resumeSkils,jobSkills)=>{

    if(!resumeSkils || !jobSkills){
        return {
            matchScore: 0,
            matchingSkils: [],
            missingSkills: [],
        }
    }


    const MatchingSkills = [];
    const MissingSkills = [];


    // Form a New Set with Resume Skills 

    const ResumeSkills = new Set(
        resumeSkils.map((item) => item.toLowerCase())
    )


    jobSkills.map((item)=>{
        if(ResumeSkills.has(item.toLowerCase())){
            MatchingSkills.push(item);
        }else{
            MissingSkills.push(item);
        }
    });


    const matchScore =
    jobSkills.length === 0
      ? 0
      : Math.round((MatchingSkills.length / jobSkills.length) * 100);


      return {
        matchScore,
        MatchingSkills,
        MissingSkills
      }

}


module.exports = {matchingServices}