// Importamos el módulo express
import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { conectarDB } from './config/mongoose.config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routerUsuarios from './src/routes/usuarios.routes.js';
import routerMascotas from './src/routes/mascotas.routes.js';
import routerAuth from './src/routes/auth.routes.js';

config();

const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

const port = process.env.PORT || 8000;
app.use('/api/usuarios', routerUsuarios);
app.use('/api/mascotas', routerMascotas);
app.use('/api/auth', routerAuth);

conectarDB();

app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
});