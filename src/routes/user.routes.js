import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json({Message: 'User paths'});
});

export default router;