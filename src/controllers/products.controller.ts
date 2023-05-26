import { Request, Response } from 'express';
import productService from '../services/products.service';

async function createProduct(req: Request, res: Response) {
  const product = await productService.createProduct(req.body);
  
  return res.status(201).json(product);
}
  
export default {
  createProduct,
};