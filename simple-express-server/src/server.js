const express = require('express');
const app = express();
app.use(express.json());

let tasks = []; // store tasks for retrieval

app.post('/tasks', (req, res) => {
    const task = req.body.text;
    if (!task) {
        return res.status(400).send({ message: 'Task text is required' });
    }
    tasks.push({ text: task });
    res.status(200).send({ message: 'Task added successfully' });
});

app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

app.listen(8001, () => {
    console.log('Server is running on port 8001');
});

