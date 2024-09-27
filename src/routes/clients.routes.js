import { Router } from 'express';
import { deleteClient, getClient, getClients, createClient, updateClient, resetClients } from '../controllers/clients.controller.js';

const router = Router();

const route = 'clients';

router.get(`/${route}`, getClients);

router.get(`/${route}/:id`, getClient);
router.post(`/${route}`, createClient);
router.patch(`/${route}/:id`, updateClient);
router.delete(`/${route}/:id`, deleteClient);

router.get(`/${route}/reset`, resetClients);

export default router;