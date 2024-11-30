export const preProcessOcrOutput = async (ocrResults) => {
  console.log(typeof ocrResults);

  try {
    for (const textContent of ocrResults) {
      return (
        textContent
          .replace(/[^\w\s.,:;!?'-]/g, "") // Keeps only standard punctuation
          .replace(/\s{2,}/g, " ") // Replaces multiple spaces with one
          // Fix broken lines
          .replace(/-\n/g, "") // Handles hyphenated word breaks
          .replace(/\\n/g, "\n")
          // .replace(/\n/g, " ") // Replaces newlines with spaces
          .replace(/([^\n])\n([^\n])/g, "$1 $2")
          .trim()
          
      );
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
