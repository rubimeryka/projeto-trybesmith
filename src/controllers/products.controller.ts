import { Request, Response } from 'express';
import ProductService from '../services/products.service';

async function createProduct(req: Request, res: Response) {
  const product = await ProductService.createProduct(req.body);
  
  return res.status(201).json(product);
}

async function getProducts(_req: Request, res: Response) {
  const products = await ProductService.getProducts();

  return res.status(200).json(products);
}

export default {
  createProduct,
  getProducts,
};