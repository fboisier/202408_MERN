// Importamos el módulo express
import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import routerUsuarios from './src/routes/usuarios.routes.js';
import { consoleLog } from './src/middlewares/middlewares.js';

config();

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

app.use(consoleLog);

const port = process.env.PORT || 8000;

app.use('/api/usuarios', routerUsuarios);

const server = app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
});

export { app, server };