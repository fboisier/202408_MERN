import { Router } from 'express';
import { getUsuarios, postUsuarios, putUsuarios, getDetalleUsuario, deleteUsuario } from '../controllers/usuarios.controller.js';
import { validarUsuarios } from '../middlewares/middlewares.js';

const router = Router();

///api/usuarios
router.get('/', getUsuarios);
router.post('/', validarUsuarios, postUsuarios);
router.put('/:id', validarUsuarios, putUsuarios);
router.get('/:id', getDetalleUsuario);
router.delete('/:id', deleteUsuario);

export default router;