import Tesseract from "tesseract.js";

export const performOcr = async (imageBuffers) => {
  const results = [];

  // console.log("at ocr fn", imageBuffers);

  const ocrPromises = imageBuffers.map(async (imageBuffer) => {
    try {
      const text = await Tesseract.recognize(imageBuffer, "eng", {
        logger: (info) => console.log(info),
      });

      results.push(text.data.text);

      // console.log(text);

      console.log(results);
    } catch (error) {
      console.error(error);
      results.push(null);
      throw new Error(error.message);
    }
  });

  await Promise.all(ocrPromises);

  return results;
};
