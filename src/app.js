import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import clientsRoutes from './routes/clients.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use('/api', employeesRoutes);
app.use('/api', clientsRoutes);
app.use(indexRoutes);

export default app;