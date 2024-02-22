const express = require('express');
const cors = require('cors');
const db = require('./db/db_connection'); 

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

db.connectToServer(function (err) {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    } 

    console.log('Connected to MongoDB');

    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}); // This closing bracket and parenthesis were missing
