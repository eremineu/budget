import { Router } from 'express';
import { createNewUser } from '../controllers/auth';
import { getAllUsers } from '../controllers/users';

const router = Router();

router.get('/', getAllUsers);
router.post('/new', createNewUser);

export default router;
