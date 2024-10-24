import { model, Schema } from 'mongoose';

const vacunaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    dosis: {
        type: Number,
        required: true,
    },
    fecha_aplicacion: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

const Vacuna = model('Vacuna', vacunaSchema);

export { Vacuna, vacunaSchema};