
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Usuario } from '../models/usuarios.model.js';
import { config } from 'dotenv';
config();

const LLAVE_SECRETA = process.env.LLAVE_SECRETA || 'llave';

const getUsuarios = async (req, res) => {
    try {
        const {nombre, apellido} = req.query;
        let filtros = {};
        
        if (nombre) {
            filtros.nombre = { $regex: nombre, $options: 'i' };
        }
        if (apellido) {
            filtros.apellido = { $regex: apellido, $options: 'i' };
        }

        const usuarios = await Usuario.find(filtros).populate('mascotas', 'nombre raza');
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const postUsuarios = async (req, res) => {
    try {
        console.log("---------FBS---------")
        console.log(req.usuario)
        console.log(req.nombre_usuario)
        console.log(req.apellido_usuario)
        console.log(req.email_usuario)
        console.log(req.tipo_usuario)
        console.log("---------FBS---------")

        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const putUsuarios = async (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;

    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(id, cuerpo, { new: true });
        if (!usuarioActualizado) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json(usuarioActualizado);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getDetalleUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};


const deleteUsuario = async(req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioEliminado) {
            res.status(404).json({ mensaje: "Usuario no encontrado" });
            return;
        }
        res.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const loginUsuario = async (req, res) => {
    try {

        const { email, password } = req.body;
        console.log("Email", email);
        console.log("Password ", password);
        const usuario = await Usuario.findOne({ email });

        console.log("Usuario", usuario);
        if (!usuario) {
            res.status(400).json({ mensaje: "Usuario o contraseña incorrectos E" });
            return;
        }

        const match = await bcryptjs.compare(password, usuario.password);
        if (!match) {
            res.status(400).json({ mensaje: "Usuario o contraseña incorrectos P" });
            return;
        }
        const datosToken = {
            id: usuario._id,
            email: usuario.email,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            tipo: usuario.tipo_usuario,
        }

        const token = jwt.sign(datosToken, LLAVE_SECRETA, { expiresIn: '15m' });
        res.cookie('authToken', token, { httpOnly: true, secure: true }).json(
            { 
                token,
                datosToken,
            }
        );

    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const logOut = async (req, res) => {
    res.clearCookie('authToken').json({ mensaje: "Sesión cerrada" });
}

export { getUsuarios, postUsuarios, putUsuarios, getDetalleUsuario, deleteUsuario, loginUsuario, logOut };