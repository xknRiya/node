import { Router } from 'express';
import { deleteEmployee, getEmployee, getEmployees, createEmployee, updateEmployee, resetEmployees } from '../controllers/employees.controller.js';

const router = Router();

const route = 'employees';

router.get(`/${route}`, getEmployees);

router.get(`/${route}/:id`, getEmployee);
router.post(`/${route}`, createEmployee);
router.patch(`/${route}/:id`, updateEmployee);
router.delete(`/${route}/:id`, deleteEmployee);

router.get(`/${route}/reset`, resetEmployees);

export default router;