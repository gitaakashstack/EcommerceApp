import express, { Express, Request, Response } from 'express';
import authRouter from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import cartRoutes from './routes/cartRoutes';
import genericRoutes from './routes/genericRoutes';
import deliverySlotRoutes from './routes/deliverySlotRoutes';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { Product } from './schemas/product.schema';

dotenv.config();
const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/slot', deliverySlotRoutes);
app.use('/', genericRoutes);


mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('server started at ' + process.env.PORT)
        });
        const x = Product;
    })
    .catch(err => console.log('Cannot connect to MongoDB Server\n', err.message))

