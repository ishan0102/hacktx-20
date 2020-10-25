const router = require("express").Router();
const multer = require("multer");
const { rename, audio } = require("../utils/video");
const upload = multer({ dest: "resources/video" });
const path = require("path");

router.post("/save", upload.single('file'), async (req, res) => {
  var { name } = await rename(req.file.path);
  
  var filePath = path.resolve(name);

  return audio(filePath, `${filePath.replace('resources/video', 'resources/audio')
                             .substring(0, filePath.length - 3)}wav`, () => {
                              return res.status(200).json({
                                audioFile: `${filePath.replace('resources/video', 'resources/audio')
                                              .substring(0, filePath.length - 3)}wav`,
                                videoFile: filePath 
                              });
                             }
  );
});

module.exports = router;
