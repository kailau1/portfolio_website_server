import Db from './db/db_connection.js';
import express from 'express';
import cors from 'cors';
import productApi from './routes/productApi.js';
import bodyParser from 'body-parser';


const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(productApi);

new Db();

app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });