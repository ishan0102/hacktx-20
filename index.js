const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express(); // generate an app object
const PORT = process.env.PORT || 5000;
const multer = require("multer");
const path = require('path')

// Middleware
app.use(bodyParser.json()); // telling the app that we are going to use json to handle incoming payload
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());

// Bring in routes
const speech = require("./server/routes/speech");
const text = require("./server/routes/text");
const face = require("./server/routes/face");
const video = require("./server/routes/video");
app.use("./server/api/speech", speech);
app.use("./server/api/text", text);
app.use("./server/api/face", face);
app.use("./server/api/video", video);

// Error response
app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  });
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
  
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// Run server
app.listen(PORT, () => {
  // Listening on port 5000
  console.log(`Server running on port ${PORT}`); // print this when the server starts
});