const router = require("express").Router();
const multer = require("multer");
const { rename, audio } = require("../utils/video");
const upload = multer({ dest: "resources/video" });
const path = require("path");

router.post("/save", upload.single('file'), async (req, res) => {
  const blob = req.body.blob;
  console.log(req.file.filename);
  var { name } = await rename(req.file.path);
  console.log(name);
  
  var filePath = path.resolve(name);

  audio(filePath, `${filePath.replace('resources/video', 'resources/audio')
                             .substring(0, filePath.length - 3)}wav`, function(err){
    if(!err) {
      console.log('conversion complete');
    }
  });

  return res.status(200).json({
    fileName: newName
  });
});

module.exports = router;
