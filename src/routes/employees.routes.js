import { Router } from 'express';
import {pool} from '../db.js';
import { deleteEmployee, getEmployee, getEmployees, createEmployee, updateEmployee, resetEmployees } from '../controllers/employees.controller.js';

const router = Router();
router.get('/employees/:id', getEmployee);
router.get('/employees', getEmployees);
router.post('/employees', createEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);
router.get('/reset', resetEmployees)
export default router