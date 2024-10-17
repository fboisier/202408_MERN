
import { model, Schema } from 'mongoose';

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Usuario = model('Usuario', usuarioSchema);

export { Usuario };