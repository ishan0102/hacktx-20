import axios from 'axios';

const API_URL = "http://localhost:5000/api/video/save/"

async function createVideo(blob) {
  const { data:  videoBlob} = await axios.post(API_URL, {
    blob: blob,
  })
  return videoBlob
}

async function deleteVideo(id) {
  const message = await axios.delete(`${API_URL}${id}`)
  return message
}

async function updateVideo(id, payload) {
  const { data: newTodo } = await axios.put(`${API_URL}${id}`, payload)
  return newTodo
}

async function getAllVideos() {
  const { data: todos } = await axios.get(API_URL)
  return todos
}

export default { createVideo, deleteVideo, updateVideo, getAllVideos };