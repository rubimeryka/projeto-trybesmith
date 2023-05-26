import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

async function getOrders(req: Request, res: Response): Promise<Response> {
  const orders = await OrdersService.getOrders();
  
  return res.status(200).json(orders);
}

export default {
  getOrders,
};