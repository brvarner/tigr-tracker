import {Router} from 'express';
import usersRouter from './users'; 
import productsRouter from './products';
import userProductsRouter from './userproducts';

const router = Router(); 


router.use('/users', usersRouter);  
router.use('/products', productsRouter);
router.use('/userproducts',userProductsRouter);

export default router;