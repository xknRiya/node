import { Router } from 'express';
import { missingData, ping, redirect } from '../controllers/index.controller.js';

const router = Router();

router.get('/ping', ping);
router.get('/missing', missingData);
router.get('*', redirect);

export default router