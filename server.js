const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const answers = require('./answers').default;

app.use(express.static(path.join(__dirname, '')));

for (const key in answers) app.get(`/task/${key}`, (req, res) => {
    res.send(`<h1>${answers[key]}</h1>`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});