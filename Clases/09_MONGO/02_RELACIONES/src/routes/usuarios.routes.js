import { Router } from 'express';
import { getUsuarios, postUsuarios, putUsuarios, getDetalleUsuario, deleteUsuario } from '../controllers/usuarios.controller.js';

const router = Router();

///api/usuarios
router.get('/', getUsuarios);
router.post('/', postUsuarios);
router.put('/:id', putUsuarios);
router.get('/:id', getDetalleUsuario);
router.delete('/:id', deleteUsuario);

export default router;