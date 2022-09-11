import { Router } from 'express';
import { createNewUser } from '../controllers/auth';

const router = Router();

router.post('/new', createNewUser);

export default router;
