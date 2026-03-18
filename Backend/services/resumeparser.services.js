const pdfParse = require("pdf-parse"); // ✅ stable version required
const mammoth = require("mammoth");

const extractTextFromFile = async (file) => {
  try {
    const mimetype = file.mimetype;
    const buffer = file.buffer;


    if(!file){
        throw new Error('File Required!!')
    }

    if (file) {
      if (mimetype == "application/pdf") {
        const data = await pdfParse(buffer);

        if (!data || !data.text) {
          throw new Error("Something Went Wrong with PdfParser");
        }

        return data.text;
      }

      if (
        mimetype ==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const data = await mammoth.extractRawText({ buffer });

        if (!data || !data.value) {
          throw new Error("Something Went Wrong with Mammoth");
        }

        return data.value;
      }

      throw err("Unsupported File Format...");
    }
  } catch (err) {
    console.log("Error Occured", err);
    throw err
  }
};

module.exports = { extractTextFromFile };
