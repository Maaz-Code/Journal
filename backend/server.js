const express = require('express');
const content = require('./data/content');
const dotenv = require('dotenv');
const app = express();

app.get("/", (req, res) => {
    res.send('Server is running...');
});

app.get("/content", (req, res) => {
    res.json(content);
});

dotenv.config();
const port = process.env.PORT || 5000;

app.listen(port,console.log(`Server started on Port ${port}`));