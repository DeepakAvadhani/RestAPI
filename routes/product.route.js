const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProduct,
  setProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", setProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
module.exports = router;
