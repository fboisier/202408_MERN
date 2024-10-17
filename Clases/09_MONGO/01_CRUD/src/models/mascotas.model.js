import { model, Schema } from 'mongoose';

const mascotaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    raza: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    fecha_nacimiento: {
        type: Date,
        required: true,
    },
    vacunas_aplicadas: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Mascota = model('Mascota', mascotaSchema);

export { Mascota };