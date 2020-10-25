const router = require("express").Router();
const faceAnalyze = require("../utils/face");
const path = require("path");

router.post("/analyze", async (req, res) => {
  const filePath = path.join(__dirname, "../resources/video/face.mp4");
  const { analysis } = await faceAnalyze(filePath);
  return res.status(200).json({
    analysis: analysis
  });
});

module.exports = router;
