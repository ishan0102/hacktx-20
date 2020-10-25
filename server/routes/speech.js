const router = require("express").Router();
const speechDetect = require("../utils/speech");
const path = require("path");

router.post("/recognize", async (req, res) => {
  const { transcription } = await speechDetect(req.body.file);
  console.log(transcription);
  return res.status(200).json({
    transcription: transcription
  });
});

module.exports = router;
