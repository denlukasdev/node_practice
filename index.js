import express from 'express';
import apiRoutes from './routes/api.js';
import initDb from './init/createDatabase.js';
import dotenv from 'dotenv';

// Enable to use .env file
dotenv.config();

const PORT = process.env.PORT ?? 3000;
const HOSTNAME = process.env.HOSTNAME;
const app = express();

// Create database and table if it doesn't exist
initDb();

// Allow handle with JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Use api routes
app.use('/api', apiRoutes);

// Listen requests
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
});