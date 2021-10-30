const express = require('express');
const content = require('./data/content');
const dotenv = require('dotenv');
const app = express();

app.get("/", (req, res) => {
    res.send('Server is running...');
});

app.get("/pages", (req, res) => {
    res.json(content);
});

app.get("/pages/:id", (req, res) => {
    const id = req.params.id;
    const page = content.find(page => page._id === id);
    if (page) {
        res.json(page);
    } else {
        res.status(404).json({ message: 'Page not found' });
    }
});

dotenv.config();
const port = process.env.PORT || 5000;

app.listen(port,console.log(`Server started on Port ${port}`));