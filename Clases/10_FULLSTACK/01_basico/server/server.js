// Importamos el módulo express
import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import routerPersonas from './src/routers/persona.router.js';
import cors from 'cors';

config();

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

const port = process.env.PORT || 8000;

app.use('/api/personas', routerPersonas);

const server = app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
});

export { app, server };