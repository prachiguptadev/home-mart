import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";


// @desc    Fetch all products
// @route   Get /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});


// @desc    Fetch a products
// @route   Get /api/products/:_id
// @access  Public

const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params._id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resouce not found");
  }
});

export { getProducts, getProductsById };
