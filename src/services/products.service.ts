import { Product } from '../types/Product';
import ProductModel from '../database/models/product.model';
// import { ServiceResponse } from '../types/ServiceResponse';

function createProduct(input: Product): Promise<unknown> {
  const { name, price, orderId } = input;
  const product = ProductModel.create({ name, price, orderId });
  return product;
}

export default {
  createProduct,
};