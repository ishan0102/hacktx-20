const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express(); // generate an app object
const PORT = process.env.PORT || 5000;
const multer = require("multer");

// Middleware
app.use(bodyParser.json()); // telling the app that we are going to use json to handle incoming payload
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());

// Bring in routes
const speech = require("./routes/speech");
const text = require("./routes/text");
const face = require("./routes/face");
const video = require("./routes/video");
app.use("/api/speech", speech);
app.use("/api/text", text);
app.use("/api/face", face);
app.use("/api/video", video);


// Error response
app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  });
});

// Run server
app.listen(PORT, () => {
  // Listening on port 5000
  console.log(`Server running on port ${PORT}`); // print this when the server starts
});
