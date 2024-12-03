import sharp from "sharp";
import fs from "fs";

export const preProcessImages = async (images) => {
  // console.log(images);

  try {
    const processedImages = await Promise.all(
      images.map(async (image) => {
        let processedImage = sharp(image);

        console.log("input image at preProcessImages", image);
        // fs.writeFileSync("input_image.png", image);

        processedImage = processedImage.grayscale().normalise();

        processedImage = await processedImage.toBuffer();

        // console.log(processedImage);
        // const response = fs.writeFileSync("processed_image.png", processedImage);

        // console.log(response);

        return processedImage;
      })
    );

    return processedImages;
  } catch (error) {
    throw new Error(`Error while preprocessing images: ${error.message}`);
  }
};
