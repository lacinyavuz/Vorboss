import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import customerRoutes from "./routes/customerRoutes";
import { seedData } from "./seedData";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

mongoose
  .connect("mongodb://mongo:27017/myapp")
  .then(() => console.log("mongoose: connected"))
  .catch((e) => console.log(e));

app.use("/api/customers", customerRoutes);

app.listen(PORT, async () => {
  seedData();
  console.log(`Server is running at http://localhost:${PORT}`);
});
