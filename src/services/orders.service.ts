import ProductModel from '../database/models/product.model';
import OrdersModel from '../database/models/order.model';
import { Product } from '../types/Product';

async function getOrders(): Promise<unknown> {
  const orders = await OrdersModel.findAll({
    
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });
  
  return orders.map((order) => {
    const { id, userId, productIds } = order.toJSON();
    
    const orderFormat = (productIds as Product[])?.map((product) => product.id) || [];
    
    return { id, userId, productIds: orderFormat };
  });
}

export default {
  getOrders,
};