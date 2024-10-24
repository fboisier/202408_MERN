import { Router } from 'express';
import { getMascotas, postMascotas, putMascotas, getDetalleMascota, deleteMascota } from '../controllers/mascotas.controller.js';

const router = Router();

///api/mascotas
router.get('/', getMascotas);
router.post('/', postMascotas);
router.put('/:id', putMascotas);
router.get('/:id', getDetalleMascota);
router.delete('/:id', deleteMascota);

export default router;