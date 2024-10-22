import { model, Schema } from 'mongoose';
import { vacunaSchema } from './vacunas.model.js';

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
    vacunas: [vacunaSchema],

    responsable: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El responsable es obligatorio'],
    },

}, { timestamps: true });

const Mascota = model('Mascota', mascotaSchema);

export { Mascota };