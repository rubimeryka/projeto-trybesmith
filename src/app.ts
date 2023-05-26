import express from 'express';
import productsController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', productsController.createProduct);

app.get('/products', productsController.getProducts);

export default app;
