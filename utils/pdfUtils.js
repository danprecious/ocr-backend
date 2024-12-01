// import fs from "fs";
// import path from "path";
// import { fromPath } from "pdf2pic"; // Import pdf2pic
// import { fileURLToPath } from "url"; // For __dirname in ES module

// import {PDFDocument} from 'pdf-lib'

// const __filename = fileURLToPath(import.meta.url); // Get the current file URL
// const __dirname = path.dirname(__filename);

// export const convertPdfToImages = async (pdfBuffer) => {
//   try {
//     // Create a temporary file to save the PDF buffer
//     const pdfPath = path.join(__dirname, "input", "temp.pdf");
//     fs.writeFileSync(pdfPath, pdfBuffer);

//     const converter = fromPath(pdfPath, {
//       density: 100, // Set the density for image resolution
//       saveFilename: "page", // Prefix for saved files
//       savePath: path.join(__dirname, "output"), // Output directory
//       format: "png", // Set image format
//       quality: 100, // Set image quality
//     });

//     // Get the number of pages in the PDF
//     const numPages = await getNumberOfPages(pdfPath);

//     console.log("response", numPages)// Function to get number of pages

//     for (let pageNum = 1; pageNum <= numPages; pageNum++) {

//       const pageImage = await converter(pageNum);

//       console.log(pageImage);

//       console.log(`Converted page ${pageNum + 1}`);
//     }

//     // Clean up temporary PDF file after conversion
//     fs.unlinkSync(pdfPath);

//     console.log("All pages converted to images");

//     // Return the paths of the saved images
//     const imagePaths = [];
//     for (let pageNum = 1; pageNum < numPages; pageNum++) {
//       imagePaths.push(path.join(__dirname, "output", `page_${pageNum + 1}.png`));
//     }

//     return imagePaths; // Return array of image paths

//   } catch (error) {
//     console.error("Error during PDF to image conversion:", error);
//     throw new Error(error);
//   }
// };

// // Function to get the number of pages in a PDF using `pdf2pic`
// const getNumberOfPages = async (pdfPath) => {
//   const pdfBytes = fs.readFileSync(pdfPath);
//   const pdfDoc = await PDFDocument.load(pdfBytes);

//   console.log("at getNumberOfPages",pdfDoc.getPages().length);
//   return pdfDoc.getPages().length;
// };


















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
      const outputPath = path.join(__dirname, `output/page_${pageNum}.png`);

      // Save each page to disk immediately
      // await sharp(imageData).toFile(outputPath);
      console.log(`Page ${pageNum} saved to ${outputPath}`);

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
