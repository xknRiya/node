import { config } from 'dotenv';

config();

export const SV_PORT = process.env.SV_PORT || 3600;

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;

export const DB_USERNAME = process.env.DB_USERNAME || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '1234';
export const DB_DATABASE = process.env.DB_DATABASE || 'default';