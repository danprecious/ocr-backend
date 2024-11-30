import express from "express";
import cors from "cors";
import { config } from "@dotenvx/dotenvx";

import router from "./routes/apiRoutes.js";

config();

const app = express();

const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log(`app running on  http://localhost:${PORT}`);
});
