# Test API application 

## How to install

**Step 1. Run npm install:**

`npm install`

**Step 2. Update .env file**

**Step 2. Start the application:**

`npm start`

## Environment

An overview of the relevant WMO envoirement variables:


| Value         | Description              |
|---------------|--------------------------|
| DB_HOST       | Database host            |
| DB_DATABASE   | Database name            |
| DB_USER       | Database username        |
| DB_PASSWORD   | Database password        |
| DB_TASK_TABLE | Database main table name |
| PORT          | Listening port           |
| HOSTNAME      | Listening host           |  


## Description

This is API Application for CRUD operations with database, could be use for schedule day work or TODO list.

During app start it create database and table if it doesn't exist.

Table contain three columns id(autoincrement), time(string) and task(string).

## Endpoints

**Get list of tasks:**
`http://127.0.0.1:3000/api/task/list`

**Get task by id:**
`http://127.0.0.1:3000/api/task/get/:id`

**Create task:**
`http://127.0.0.1:3000/api/task/create`

**Edit task by id:**
`http://127.0.0.1:3000/api/task/edit/:id`

**Delete task by id:**
`http://127.0.0.1:3000/api/task/delete/:id`

**Post data example for create/edit endpoint:**
`{"time": "midday 13:00", "task": "take a dinner"}`