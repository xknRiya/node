import { pool } from "../db.js";

export const req = async (req, res) => {
    const result = await pool.query('SELECT "Pong" AS result;');
    res.json(result[0]);
    console.log(req.body);
};
export const ping = async (req, res) => {
    const result = await pool.query('SELECT "Pong" AS result;');
    res.json(result[0]);
};
export const missingData = async (req, res) => {
    return res.status(404).json({
        message: 'Endpoint not found.'
    })
}
export const redirect = (req, res)=>{
    res.redirect('/missing');
}