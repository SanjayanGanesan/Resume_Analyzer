const express = require("express");
const router = express.Router();

const uploadFile = require("../middleware/upload.middleware");
const { analyze } = require("../controllers/resume.controller");

router.post(
    "/analyze",
    uploadFile.single("resume"),
    analyze
);

module.exports = router;