import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import {createProduct, deleteProduct, getProducts, updateProduct} from "../controllers/product.controller.js";
const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct);
router.put("/:id",updateProduct );
export default router;
