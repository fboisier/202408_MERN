import { Router } from 'express';
import { getUsuarios, postUsuarios, putUsuarios, getDetalleUsuario, deleteUsuario, loginUsuario, logOut} from '../controllers/usuarios.controller.js';
import autenticarJWT, {otroMidleware} from '../middlewares/jwt.middleware.js';

const router = Router();

///api/usuarios
router.get('/', getUsuarios);
router.post('/', autenticarJWT, otroMidleware, postUsuarios);
router.put('/:id',autenticarJWT, putUsuarios);
router.get('/:id', getDetalleUsuario);
router.delete('/:id', autenticarJWT, deleteUsuario);


export default router;