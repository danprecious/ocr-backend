export const calculateTokens = (text) => {
  const tokens = text.split(/[\s,.!?;:()\[\]{}'"\-—]+/);

  return tokens.filter((token) => token.length > 0).length;
};

export const chunkText = async (text, maxTokens) => {
  const words = text.split(/\s+/);

  let chunks = [];

  let currentChunk = [];

  let currentTokenCount = 0;

  for (const word of words) {
    const tokenEstimate = word.length > 1 ? 1 : 0.5;

    if (currentTokenCount + tokenEstimate > maxTokens) {
      chunks.push(currentChunk.join(""));

      currentChunk = [];
      currentChunk = 0;
    }

    currentChunk.push(word);
    currentChunk += tokenEstimate;
  }

  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join(""));
  }

  return chunks;
};
