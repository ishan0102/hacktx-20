const router = require("express").Router();
const textAnalyze = require("../utils/text");

router.post("/analyze", async (req, res) => {
  const text = req.body.text;
  const { analysis } = await textAnalyze(text);
  return res.status(200).json({
    analysis: analysis
  });
});

module.exports = router;
