
import { Usuario } from '../models/usuarios.model.js';


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

export { getUsuarios, postUsuarios, putUsuarios, getDetalleUsuario, deleteUsuario };