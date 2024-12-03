export const calculateTokens = (text) => {
  const tokens = text.split(/[\s,.!?;:()\[\]{}'"\-—]+/);

  return tokens.filter((token) => token.length > 0).length;
};

export const chunkText = async (text, maxTokens) => {
  const words = text.split(/\s+/);

  console.log(words)

  let chunks = [];

  let currentChunk = []; 

  let currentTokenCount = 0;

  for (const word of words) {
    const tokenEstimate = word.length > 1 ? 1 : 0.5;

    // console.log(tokenEstimate);
    // console.log("type of", typeof(currentChunk));

    if (currentTokenCount + tokenEstimate > maxTokens) {
      chunks.push(currentChunk.join(""));

      currentChunk = [];
      currentTokenCount = 0;
    }
    currentChunk.push(word)

    currentTokenCount += tokenEstimate;
  }

  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join(""));
  }

  return chunks;
};
