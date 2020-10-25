import axios from 'axios';

const API_URL = "http://localhost:5000/api/video/save"

async function saveVideo(file) {
  var fd = new FormData();
  fd.append('file', file);

  const { data: fileName } = await axios.post(API_URL, fd, {
    headers: {
      "content-type": "multipart/form-data"
    }
  });
  console.log(fileName);
  return {
    fileName: fileName
  }
}

export default saveVideo;
