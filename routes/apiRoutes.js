import express from "express";
import uploadMiddleWare from "../middleware/uploadMiddleWare.js";
import { handleFileUploads } from "../controllers/handleFileUploads.js";
import multer from "multer";

const router = express.Router();

// router.post('/ocr-processing', upload.single('file'), )

router.get("/test", (req, res) => {
  console.log("router works...");
  res.status(200).json({ message: "api reached" });
});

router.post("/uploadFile", uploadMiddleWare, handleFileUploads);

export default router;
