import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.static(resolve('public')));

export { app };