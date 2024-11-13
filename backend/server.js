import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors"

import productRoutes from "./routes/product.route.js";
dotenv.config();
const app = express();

const port = process.env.port || 5000;
//to accept the request from body
//allows json data to parse from req.body
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);
app.listen(port, () => {
  connectDB();
  console.log(`Sever started on localhost ${port} hello`);
});
app.get("/", (req, res) => {
  res.json({ message: `Server is ready` });
});
