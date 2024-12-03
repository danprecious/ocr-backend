import fs from "fs";
import path from "path";
import { createCanvas } from "canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import sharp from "sharp";
import { fromPath } from "pdf2pic";

import { fileURLToPath } from "url"; // Import this to work with import.meta.url

const __filename = fileURLToPath(import.meta.url); // Get the current file URL
const __dirname = path.dirname(__filename);

export const convertPdfToImages = async (pdfBuffer) => {
  try {
    console.log("test");
    const data = new Uint8Array(pdfBuffer);
    const pdf = await getDocument(data).promise;

    const numPages = pdf.numPages;

    console.log(numPages);

    const images = [];

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvasEl = createCanvas(viewport.width, viewport.height);

      const context = canvasEl.getContext("2d");

      // console.log(canvasEl, context);

      context.fillStyle = "white";
      context.fillRect(0, 0, canvasEl.width, canvasEl.height);

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      const imageData = canvasEl.toBuffer("image/png");
      // const outputPath = path.join(__dirname, `output/page_${pageNum}.png`);

      // Save each page to disk immediately
      // await sharp(imageData).toFile(outputPath);
      // console.log(`Page ${pageNum} saved to ${outputPath}`);

      images.push(imageData);

      console.log(`page ${pageNum} image data: `, imageData.length);
    }

    // console.log(images);
    return images;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
