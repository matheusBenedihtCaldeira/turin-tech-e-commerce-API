import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/product';
import path from 'path';

dotenv.config();
const app = express();
app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname, '..', 'uploads', 'images')));
export default app;
