import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';
import './config.js'
const app = express();
const PORT = 3600;

app.use(express.json());
app.use('/api', employeesRoutes);
app.use(indexRoutes)

app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});