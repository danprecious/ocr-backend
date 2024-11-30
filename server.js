import express from "express";
import cors from "cors";
import { config } from "@dotenvx/dotenvx";
import { rateLimit } from "express-rate-limit";

import router from "./routes/apiRoutes.js";

config();

const app = express();

const PORT = process.env.PORT;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(limiter);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Base route is working");
});

app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting the server: ${err.message}`);
    process.exit(1); // Exit the process with a failure code
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
