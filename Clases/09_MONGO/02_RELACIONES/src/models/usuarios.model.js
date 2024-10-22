
import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [50, 'El nombre no puede tener más de 50 caracteres'],
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
        validate: {
            validator: (valor) => {
                return valor.toLowerCase().includes('a');
            },
            message: props => `${props.value} debe contener la letra "a"`,
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        match: [
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
            'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número'
        ],
    },
    mascotas: {
        type: [Schema.Types.ObjectId],
        ref: 'Mascota',
    },
}, { timestamps: true });

usuarioSchema.plugin(uniqueValidator, { message: 'El {PATH} {VALUE} ya existe, por favor elige otro' });

const Usuario = model('Usuario', usuarioSchema);

export { Usuario };