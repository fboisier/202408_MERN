import { Router } from 'express';
import { loginUsuario, logOut} from '../controllers/usuarios.controller.js';

const router = Router();

///api/auth
router.post('/login', loginUsuario)
router.get('/logout', logOut)
export default router;