import Tesseract from "tesseract.js";

export const performOcr = async (imageBuffers) => {
  const results = [];

  console.log("at ocr fn", imageBuffers);

  for (const imageBuffer of imageBuffers) {
    const text = await Tesseract.recognize(imageBuffer, "eng", {
      logger: (info) => console.log(info),
    });

    results.push(text.data.text);

    console.log(text);
  }

  console.log(results);

  return results;
};
