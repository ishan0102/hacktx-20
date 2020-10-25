import axios from 'axios';

const API_URL = "http://localhost:5000/api"

async function analyzeVideo(file) {
  var fd = new FormData();
  fd.append('file', file);

  return axios.post(`${API_URL}/video/save`, fd, {
    headers: {
      "content-type": "multipart/form-data"
    }
  }).then(res => {
    console.log(res);
    axios.post(`${API_URL}/speech/recognize`, {
      file: res.data.audioFile
    }).then(res => {
      console.log(res);
      axios.post(`${API_URL}/text/analyze`, {
        text: res.data.transcription
      }).then(res => {
        console.log(res);
        return res.data.analysis;
      });
    });
  });
}

export { analyzeVideo };
