// Imports the Google Cloud client library
const language = require('@google-cloud/language');

module.exports = async (text) => {
  // Creates a client
  const client = new language.LanguageServiceClient();
  
  // Prepares a document, representing the provided text
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };
  
  // Need to specify an encodingType to receive word offsets
  const encodingType = 'UTF8';
  
  // Detects the sentiment of the document
  const [syntax] = await client.analyzeSyntax({document, encodingType});
  
  return {
    analysis: syntax.tokens
  }
}
