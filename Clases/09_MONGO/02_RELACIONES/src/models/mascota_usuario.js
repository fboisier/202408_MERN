import { model, Schema } from 'mongoose';

const mascotaUsuarioSchema = new Schema({
    mascota: {
        type: Schema.Types.ObjectId,
        ref: 'Mascota',
        required: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
}, { timestamps: true });