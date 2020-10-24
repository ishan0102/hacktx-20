const router = require("express").Router();
const speechDetect = require("../utils/speech");
const path = require("path");

router.post("/recognize", async (req, res) => {
  const { transcription } = await speechDetect(path.join(__dirname, "../resources/male.wav"));
  return res.status(200).json({
    transcription: transcription
  });
});

module.exports = router;
