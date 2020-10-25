// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
const fs = require("fs");

module.exports = async (filename) => {
  // Creates a client
  const client = new speech.SpeechClient();

  // Configuration
  const encoding = 'LINEAR16';
  const sampleRateHertz = 48000;
  const languageCode = 'en-US';

  const config = {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  };
  const audio = {
    content: fs.readFileSync(filename).toString('base64'),
  };

  const request = {
    config: config,
    audio: audio,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  return {
    transcription: transcription
  }
}
