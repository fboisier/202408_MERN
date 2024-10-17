import { Mascota } from '../models/mascotas.model.js';

const getMascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find();
        res.json(mascotas);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const postMascotas = async (req, res) => {
    try {
        const mascota = await Mascota.create(req.body);
        res.json(mascota);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const putMascotas = async (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;

    const opciones = {
        new: true, // Devolver el documento actualizado en lugar del original
        runValidators: true, // Ejecutar validaciones de esquema en la actualización
    };


    try {
        const mascotaActualizada = await Mascota.findByIdAndUpdate(id, cuerpo, opciones);
        if (!mascotaActualizada) {
            res.status(404).json({ mensaje: "Mascota no encontrada" });
            return;
        }
        res.json(mascotaActualizada);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getDetalleMascota = async (req, res) => {
    try {
        const mascota = await Mascota.findById(req.params.id);
        if (!mascota) {
            res.status(404).json({ mensaje: "Mascota no encontrada" });
            return;
        }
        res.json(mascota);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const deleteMascota = async(req, res) => {
    try {
        const mascotaEliminada = await Mascota.findByIdAndDelete(req.params.id);
        if (!mascotaEliminada) {
            res.status(404).json({ mensaje: "Mascota no encontrada" });
            return;
        }
        res.json({ mensaje: "Mascota eliminada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export { getMascotas, postMascotas, putMascotas, getDetalleMascota, deleteMascota };