import express from 'express';
import { router } from './routes/rd2d';
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(router);

export default app;
