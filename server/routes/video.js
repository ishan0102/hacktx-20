const router = require("express").Router();
const multer = require("multer");
const refactorFile = require("../utils/video");
const upload = multer({ dest: "resources/" });

router.post("/save", upload.single('file'), (req, res) => {
  const blob = req.body.blob;
  console.log(req.file.filename);
  refactorFile(req.file.path);
  return res.status(200).json({
    fileName: req.file.path
  });
});

module.exports = router;
