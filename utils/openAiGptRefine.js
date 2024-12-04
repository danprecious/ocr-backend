import OpenAI from "openai";
import { calculateTokens, chunkText } from "./tokenization.js";
import { sendToHuggingFaceAPI } from "./gptNeoRefine.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MAX_TOKENS = 2096;
const BUFFER_TOKENS = 100;

const availableTokens = MAX_TOKENS - BUFFER_TOKENS;

const inputTokenLimit = Math.floor(availableTokens / 2);
const outputTokenLimit = Math.floor(availableTokens / 2);

export const refineOcrText = async (text) => {
  console.log("AT REFINE TEXT: TEXT RECEIVED", text.slice(0, 200));

  const tokenCount = calculateTokens(text);

  if (tokenCount > inputTokenLimit) {
    console.log("Text token limit exceeded, chunking...");
    const textChunks = await chunkText(text, inputTokenLimit);
    let refinedChunks = [];

    for (const chunk of textChunks) {
      const response = await sendToHuggingFaceAPI(chunk, outputTokenLimit);
      refinedChunks.push(response);
    }

    return refinedChunks.join(" ");
  } else {
    console.log("Text is within token limit, processing...");

    const refinedText = await sendToHuggingFaceAPI(text, outputTokenLimit);

    // console.log("From RefineText fn:", refinedText.slice(0, 500));
    return refinedText;
  }
};

export const sendToGpt = async (text, outputLimit) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that refines and formats OCR text.",
        },
        {
          role: "user",
          content: text,
        },
      ],
      max_tokens: outputLimit,
      temperature: 0.7,
      top_p: 0.95,
    });

    console.log(
      "At sendToGPT fn",
      response.data.choices[0].message.content.trim()
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("At sendToGpt fn", error);
    throw new Error(error);
  }
};
