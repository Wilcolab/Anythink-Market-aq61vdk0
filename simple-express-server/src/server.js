const express = require('express');
const app = express();
app.use(express.json());


app.post('/tasks', (req, res) => {
    const task = req.body.task;
    // Your logic for handling the task goes here
    res.status(200).send({ message: 'Task added successfully' });
});

app.listen(8001, () => {
    console.log('Server is running on port 8001');
});
