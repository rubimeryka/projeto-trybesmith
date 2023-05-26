import { Request, Response } from 'express';
import productService from '../services/products.service';

async function createProduct(req: Request, res: Response) {
  const product = await productService.createProduct(req.body);
  
  return res.status(201).json(product);
}

async function getProducts(req: Request, res: Response) {
  const products = await productService.getProducts();

  return res.status(200).json(products);
}

export default {
  createProduct,
  getProducts,
};