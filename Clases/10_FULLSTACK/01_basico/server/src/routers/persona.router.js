import { Router } from 'express';
import { getPersonas } from '../controllers/persona.controller.js';

const router = Router();

//api/personas
router.get('/', getPersonas);

export default router;