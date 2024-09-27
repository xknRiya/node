import { pool } from "../db.js";

export const getClients = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clients AS result');
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        });
    };
};

export const getClient = async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await pool.query('SELECT * FROM clients WHERE ID = ?', id);
        if ( rows.length <= 0 ){
            return res.status(404).json({
                message: 'wololo'
            });
        } else {
            res.json(rows[0]);
        };
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        });
    };
};


export const createClient = async (req, res) => {
    try {
        const {name} = req.body;
        const [rows] = await pool.query('INSERT INTO clients(name) VALUES (?)', [name]);
        res.send({
            id:rows.insertId,
            name:name
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        });
    };
};

export const updateClient = async (req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const [result] = await pool.query('UPDATE clients SET name = IFNULL(?, name) WHERE id = ? ', [name, id]);
        
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Client not found.'
        });
      
        const [rows] = await pool.query('SELECT * FROM clients WHERE ID = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        });   
    };
};

export const deleteClient = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query(`DELETE FROM clients WHERE id = ?`, id);
        if (result.affectedRows <= 0){
            return res.status(404).json({
                message: 'Client not found'
            });
        };
        res.send('Client deleted');
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        });                
    };
};

export const resetClients = async (req, res) => {
    await pool.query('DELETE FROM clients');
    await pool.query('ALTER TABLE clients AUTO_INCREMENT=1');
    await pool.query(`INSERT INTO clients VALUES
    (1, 'Jane'),
    (2, 'John'),
    (3, 'Alice'),
    (4, 'Bob'),
    (5, 'Charlie'),
    (6, 'Diana'),
    (7, 'Ethan'),
    (8, 'Fiona'),
    (9, 'George'),
    (10, 'Hannah'),
    (11, 'Ian'),
    (12, 'Judy'),
    (13, 'Kevin'),
    (14, 'Laura'),
    (15, 'Mike'),
    (16, 'Nina'),
    (17, 'Oscar'),
    (18, 'Paula'),
    (19, 'Quinn'),
    (20, 'Ray');`);
    res.send('Reseted');
};