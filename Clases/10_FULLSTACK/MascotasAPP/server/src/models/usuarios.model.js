
import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcryptjs from 'bcryptjs';


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
    tipo_usuario: {
        type: String,
        enum: ['admin', 'normal'],
        default: 'normal',
        required: false,
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

// Agregar campo virtual para confirmación de clave secreta
usuarioSchema.virtual('confirm_password')
    .get(function () { return this._confirmacionClaveSecreta; })
    .set(function (value) { this._confirmacionClaveSecreta = value; });

// Gancho de pre-validación para verificar si las claves secretas coinciden
usuarioSchema.pre('validate', function (next) {
    if (this.password !== this.confirm_password) {
        this.invalidate('confirm_password', 'Las claves secretas deben coincidir');
    }
    next();
});


// Gancho de pre-guardado para hashear la clave secreta
usuarioSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            const salt = await bcryptjs.genSalt(10);
            this.password = await bcryptjs.hash(this.password, salt);
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

usuarioSchema.plugin(uniqueValidator, { message: 'El {PATH} {VALUE} ya existe, por favor elige otro' });

const Usuario = model('Usuario', usuarioSchema);

export { Usuario };