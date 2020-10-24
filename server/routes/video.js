const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "resources/" });

router.post("/save", upload.single('file'), (req, res) => {
  const blob = req.body.blob;
  console.log(req.body);
  return res.status(200).json({
    fileName: "test.mp4"
  });
});

module.exports = router;
