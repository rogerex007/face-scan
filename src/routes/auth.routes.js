import { Router } from 'express';
import authCtr from '../controllers/auth.controller';
const router = Router();


router.get('/welcome', authCtr.welcome);
router.post('/signup', authCtr.signup);

export default router;