import { convertPdfToImages } from "../utils/pdfUtils.js";
import { performOcr } from "../utils/performOcr.js";
import { preProcessImages } from "../utils/preProcessImage.js";
import fs from "fs";
import { preProcessOcrOutput } from "../utils/preProcessOcrOutput.js";
import { refineOcrText } from "../utils/openAiGptRefine.js";

export const handleFileUploads = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("Uploaded file:", file);

    if (file.mimetype === "application/pdf") {
      console.log("PDF file uploaded");

      const pdfImages = await convertPdfToImages(file.buffer);

      console.log(pdfImages);

      if (!pdfImages || pdfImages.length === 0) {
        return res
          .status(400)
          .json({ error: "Failed to extract images from PDF" });
      }

      const preProcessedImages = await preProcessImages(pdfImages);

      console.log(preProcessedImages);

      const ocrResults = await performOcr(preProcessedImages);

      const preProcessedOcrOutput = await preProcessOcrOutput(ocrResults);
      
      console.log("preprocessedOutput:", preProcessedOcrOutput);
      
      const refinedText = await refineOcrText(preProcessedOcrOutput.join(" "));


      return res.status(200).json({
        message: "Pdf processed sucessfully",
        ocrTexts: preProcessedOcrOutput,
        refinedText: refinedText,
      });
    } else if (file.mimetype.startsWith("image/")) {
      console.log("Image uploaded");

      const images = await preProcessImages([file.buffer]);
      const ocrResults = await performOcr(images);
      const preProcessedOcrOutput = await preProcessOcrOutput(ocrResults);
      const refinedText = await refineOcrText(preProcessedOcrOutput.join(" "));

      // console.log(refinedText);

      return res.status(200).json({
        message: "Image file(s) processed sucessfully",
        ocrTexts: preProcessedOcrOutput,
        refinedGPTText: refinedText,
      });
    } else {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    res.status(200).json({ success: true, message: "file processed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
