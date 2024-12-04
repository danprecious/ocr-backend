import { refineOcrText } from "../utils/openAiGptRefine.js";
import { preProcessOcrOutput } from "../utils/preProcessOcrOutput.js";

export const handleGPTRefine = async (req, res) => {
  try {
    const data = req.body;

    const ocrtext = data.ocrText;

    console.log(data);
    console.log(ocrtext);

    const preProcessedOcrOutput = await preProcessOcrOutput(ocrtext);
    console.log("at gpt api", preProcessedOcrOutput);

    const refinedText = await refineOcrText(preProcessedOcrOutput.join(" "));

    console.log(refinedText);

    res.status(200).json({ message: "api reached", refinedText: refinedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
