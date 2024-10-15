// Importamos el módulo express
import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
config();

const app = express();

app.use(helmet());
app.use(morgan('tiny'));

const port = process.env.PORT || 8000;
const password = process.env.PASSWORD || 'HOLAMUNDO';

// Definimos una ruta básica para el servidor
app.get('/', (req, res) => {
    res.send('Hola Mundo!'+ password);
});

// Definimos una ruta básica para el servidor
app.get('/pancho', (req, res) => {
    res.send('<h1>HOLA PANCHO</h1>');
});

app.post('/pancho', (req, res) => {
    res.send('<h1>HOLA PANCHO desde POST</h1>');
});

app.delete('/pancho', (req, res) => {
    res.send('<h1>HOLA DELETE PANCHO desde POST</h1>');
});

// Configuramos el servidor para que escuche en el puerto especificado
// y ejecutamos una función callback que muestra un mensaje en la consola
app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
});