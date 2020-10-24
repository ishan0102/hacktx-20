import axios from 'axios';

const API_URL = "http://localhost:5000/api/video/save"

async function saveVideo(file) {
  // blob.arrayBuffer().then(buffer => {
  //   var fs = require("browserify-fs");
  //   fs.writeFile('tmp.mp4', buffer, () => {
  //     fs.readFile('tmp.mp4', 'binary', async (err, data) => {
  //       if (err) throw err;
  //       console.log(data);
  //       const { data:  videoBlob } = await axios.post(API_URL, data);
  //       return videoBlob
  //     });
  //   });
  // });
  var fd = new FormData();
  fd.append('file', file);

  await axios.post(API_URL, fd, {
    headers: {
      "content-type": "multipart/form-data"
    }
  });
}

export default saveVideo;
