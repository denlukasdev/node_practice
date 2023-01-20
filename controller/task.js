import dbRequest from "../model/dbQuery.js";
const dbTaskController = {
    
    'getList': (req, res) => {
        let query = `SELECT * FROM ${process.env.DB_TASK_TABLE};`;
        dbRequest(query, res);
    },
    'getById': (req, res) => {
        let query = `SELECT * FROM ${process.env.DB_TASK_TABLE} WHERE id=${req.params.id};`;
        dbRequest(query, res);
    },
    'create': (req, res) => {
        let params = req.body;
        let query = `INSERT INTO ${process.env.DB_TASK_TABLE} (time, task) VALUES ('${params.time}', '${params.task}')`;
        dbRequest(query, res);
    },
    'editById': (req, res) => {
        let params = req.body;
        let query = `UPDATE ${process.env.DB_TASK_TABLE} SET time='${params.time}', task='${params.task}' WHERE id='${req.params.id}'`;
        dbRequest(query, res);
    },
    'deleteById': (req, res) => {
        let query = `DELETE FROM ${process.env.DB_TASK_TABLE} WHERE id='${req.params.id}';`;
        dbRequest(query, res);
    }
};

export default dbTaskController