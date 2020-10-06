import { Router } from 'express';
import clientRouter from './clients.routes';
import productRouter from './product.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/client', clientRouter);

export default routes;
