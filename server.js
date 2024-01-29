const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const answers = require('./answers').default;

app.use(express.static(path.join(__dirname, '')));

for (const key in answers) app.get(`/task/${key}`, (req, res) => {
    console.log(answers[key]);
    res.send(`${answers[key]}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});