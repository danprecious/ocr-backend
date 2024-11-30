export const preProcessOcrOutput = async (ocrResults) => {
  console.log("at preprocess output", typeof(ocrResults));
  console.log(ocrResults.length);

  try {
    let processedResults = [];  // Store the processed results
    for (const textContent of ocrResults) {
      console.log(textContent);  // Log each element for debugging

      // You can add any cleaning logic here
      let cleanedText = textContent
        .replace(/[^\w\s.,:;!?'-]/g, "")  // Removes non-standard characters
        .replace(/\s{2,}/g, " ")         // Replaces multiple spaces with one
        .replace(/-\n/g, "")             // Removes broken words with hyphen at line breaks
        .replace(/\\n/g, "\n")          // Corrects escaped newlines
        .replace(/([^\n])\n([^\n])/g, "$1 $2")  // Fixes newlines in the middle of sentences
        .trim();                       // Trims the final spaces

      processedResults.push(cleanedText);  // Store each cleaned result
    }

    return processedResults;  // Return the array of cleaned results
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
