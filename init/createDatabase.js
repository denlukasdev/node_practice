import dbRequest from "../model/dbQuery.js";
import chalk from "chalk";

function initDatabase() {
    const initQueries = {
        createDb: `CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE};`,
        createTable: `CREATE TABLE if NOT EXISTS ${process.env.DB_TASK_TABLE} (` +
            "id int(11) NOT NULL AUTO_INCREMENT," +
            "time varchar(100) NOT NULL DEFAULT ''," +
            "task varchar(100) NOT NULL DEFAULT ''," +
            "PRIMARY KEY (id)" +
            ");"
    };

    Object.values(initQueries).forEach(query => {
        dbRequest(query);
    });
    console.log(chalk.bgMagentaBright.black("INIT DATABASE COMMAND"));
}

export default initDatabase;
