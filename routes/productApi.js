import express from 'express';
import Product from '../models/Product.js';


const productApi = express.Router();

productApi.post('/api/product', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).send('Product added successfully');
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).send('Error adding product');
  }
});

export default productApi;