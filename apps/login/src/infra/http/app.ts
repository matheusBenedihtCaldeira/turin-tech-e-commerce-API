import express from 'express';
import router from './routes/login';
import dotenv from 'dotenv';
import errorsCatch from '../../application/middlewares/errorsCatch';

dotenv.config();
const app = express();
app.use(express.json());
app.use(errorsCatch);
app.use(router);
export default app;
