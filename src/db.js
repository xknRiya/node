import {createPool} from 'mysql2/promise';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from './config.js';
export const pool = createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE
});