import express from 'express';
import OrdersController from './controllers/orders.controller';
import ProductsController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', ProductsController.createProduct);

app.get('/products', ProductsController.getProducts);

app.get('/orders', OrdersController.getOrders);

export default app;
