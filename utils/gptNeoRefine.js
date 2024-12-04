import { HfInference } from "@huggingface/inference";

const chatCompletion = new HfInference("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");

export const sendToHuggingFaceAPI = async (text, outputLimit) => {
  console.log(typeof text);

  try {
    const client = new HfInference("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");

    const response = await client.chatCompletion({
      model: "HuggingFaceH4/starchat2-15b-v0.1",
      messages: [
        {
          role: "user",
          content: `Refine the following OCR text to make it more readable, correct spellings/sentences and correct any formatting issues only:${text}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 0.9,
    });

    const refinedText = response.choices[0].message.content;

    console.log("refined text from huggingface:", refinedText.slice(0, 500));

    return refinedText;
  } catch (error) {
    console.error(
      "Error with Hugging Face API:",
      error.response?.data || error.message
    );
    throw error;
  }
};
