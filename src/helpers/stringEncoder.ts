// Encode function
function encodeText(text: string) {
  const timestamp = Date.now();
  return `${text}-${timestamp}`;
}

// Decode function
function decodeText(encodedText: string) {
  return encodedText.split("-")[0];
}

export { encodeText, decodeText };
