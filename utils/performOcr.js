import { createWorker } from "tesseract.js";

export const performOcr = async (imageBuffers, batchSize = 3) => {
  const results = [];
  const worker = await createWorker("eng");

  try {
    for (let i = 0; i < imageBuffers.length; i += batchSize) {
      const batch = imageBuffers.slice(i, i + batchSize);

      const batchResults = await Promise.all(
        batch.map(async (imageBuffer) => {
          try {
            // const resizedBuffer = await sharp(imageBuffer)
            //   // .resize({ width: 800 }) // Downscale image
            //   .toBuffer();

            const {
              data: { text },
            } = await worker.recognize(imageBuffer);
            return text;
          } catch (error) {
            console.error(error);
            return null;
          }
        })
      );
      results.push(...batchResults);
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  } finally {
    await worker.terminate();
  }

  return results;
};
