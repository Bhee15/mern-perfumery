import express from "express";
import { allProducts, createProduct, deleteProduct, insertMany, singleProduct, updateProduct } from "../controllers/productContoller.js";
const router = express.Router();

// post request
router.post("/create",createProduct); 
router.post("/create-many",insertMany)

// get request
router.get("/products",allProducts);

// getting single products
router.get("/:productId", singleProduct);

// deleting product
router.delete("/:productId",deleteProduct);

// updating product
router.patch("/:productId",updateProduct);

export default router;