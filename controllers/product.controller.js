const Product = require("../models/product.model.js");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const setProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).send("product not found");
    }
    const updatedproduct = await Product.findById(id);
    res.status(200).json(updatedproduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async(req,res)=>{
    try {  
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          return res.status(404).send("product not found");
        }
        res.status(200).json({ message: "Product Deleted Successfully" });
      } catch (error) {
        return res.status(500).send(error.message);
      }
}
module.exports = {
  getProducts,
  getProduct,
  setProducts,
  updateProduct,
  deleteProduct,
};
