const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @route     GET api/products
// @desc      fetch all products
// @access    public
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({});

    res.json(products);
})

// @route     GET api/products/:id
// @desc      get single product
// @access    public
const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);

    if(product){
        res.json(product);
    } else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})

module.exports = {
    getProducts: getProducts,
    getProductById: getProductById,
};