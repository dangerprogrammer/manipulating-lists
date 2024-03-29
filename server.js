const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const answers = require('./answers').default;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

for (const key in answers) app.get(`/task/${key}`, (req, res) => {
    const data = {
        answerName: key,
        answer: answers[key]
    };
    
    res.render('answer', data);
});

app.get('/task/', (req, res) => {
    const data = {
        listAnswers: answers
    };

    res.render('index', data);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});