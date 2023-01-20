import chalk from "chalk";
import mysql from "mysql2";

const queryRequest = (query, res = null) => {
    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
    db.connect(err => {
        if (err) {
            return console.log(chalk.red('DB_ERROR: ' + err.message));
        } else {
            console.log(chalk.green('DB_CONNECTION_IS_SUCCESS'));
        }
    });
    db.execute(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (res) {
            res.send(result);
        }
    });
    db.end(err => {
        if (err) {
            console.log(chalk.red('DB_ERROR: ' + err.message));
        } else {
            console.log(chalk.yellow('DB_CONNECTION_IS_CLOSED'));
        }
    });
}

export default queryRequest;