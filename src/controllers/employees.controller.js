import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        throw new Error('DB Error');
        const result = await pool.query('SELECT * FROM employees AS result');
        res.json(result[0]);    
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        });
    };
};

export const getEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await pool.query('SELECT * FROM employees WHERE ID = ?', id);
        if ( rows.length <= 0 ){
            return res.status(404).json({
                message: 'wololo'
            })
        } else {
            res.json(rows[0]);
        };
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        })    
    }
};


export const createEmployee = async (req, res) => {
    try {
        const {name, salary} = req.body;
        const [rows] = await pool.query('INSERT INTO employees(name, salary) VALUES (?, ?)', [name, salary]);
        res.send({
            id:rows.insertId,
            name:name,
            salary:salary
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        })
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, salary} = req.body;
        const [result] = await pool.query('UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ? ', [name, salary, id]);
        
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found.'
        });
      
        const [rows] = await pool.query('SELECT * FROM employees WHERE ID = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        })        
    }

};

export const deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query(`DELETE FROM employees WHERE id = ?`, id);
        if (result.affectedRows <= 0){
            return res.status(404).json({
                message: 'Employee not found'
            });
        }
        res.send('Employee deleted')
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong.'
        })                
    }

};

export const resetEmployees = async (req, res) => {
    await pool.query('DELETE FROM employees');
    await pool.query('ALTER TABLE employees AUTO_INCREMENT=1');
    await pool.query(`INSERT INTO employees VALUES
    (1, 'Jane', 2700),
    (2, 'John', 2000),
    (3, 'Alice', 2500),
    (4, 'Bob', 1800),
    (5, 'Charlie', 2200),
    (6, 'Diana', 1700),
    (7, 'Ethan', 3000),
    (8, 'Fiona', 1600),
    (9, 'George', 2100),
    (10, 'Hannah', 1900),
    (11, 'Ian', 2300),
    (12, 'Judy', 1400),
    (13, 'Kevin', 2000),
    (14, 'Laura', 1800),
    (15, 'Mike', 2500),
    (16, 'Nina', 1700),
    (17, 'Oscar', 1900),
    (18, 'Paula', 2100),
    (19, 'Quinn', 2300),
    (20, 'Ray', 2000);`);
    res.send('Reseted')
};