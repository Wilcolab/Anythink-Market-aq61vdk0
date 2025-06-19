const express = require('express');

const app = express();
const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Hello World');
}); 

app.get('/tasks', (req, res) => {
    const tasks = [
        "Write a diary entry from the future",
        "Create a time machine from a cardboard box",
        "Plan a trip to the dinosaurs",
        "Draw a futuristic city",
        "List items to bring on a time-travel adventure"
    ];
    res.json(tasks);
}); 

app.post('/tasks', express.json(), (req, res) => {
    const newTask = req.body.text;
    if (!newTask) {
        return res.status(400).json({ error: 'Task text is required' });
    }
    // Here you would typically save the task to a database
    res.status(201).json({ message: 'Task created', task: newTask });
}); 
app.put('/tasks/:id', express.json(), (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body.text;
    if (!updatedTask) {
        return res.status(400).json({ error: 'Updated task text is required' });
    }
    // Here you would typically update the task in a database
    res.json({ message: 'Task updated', taskId, updatedTask });
}); 
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    // Here you would typically delete the task from a database
    res.json({ message: 'Task deleted', taskId });
});
app.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    // Here you would typically fetch the task from a database
    res.json({ message: 'Task fetched', taskId });
});
app.get('/tasks/search', (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
    }
    // Here you would typically search for tasks in a database
    res.json({ message: 'Search results', query });
});
app.get('/tasks/complete', (req, res) => {
    // Here you would typically fetch completed tasks from a database
    res.json({ message: 'Completed tasks fetched' });
});
app.get('/tasks/incomplete', (req, res) => {
    // Here you would typically fetch incomplete tasks from a database
    res.json({ message: 'Incomplete tasks fetched' });
}       
);
app.get('/tasks/priority', (req, res) => {
    const priority = req.query.priority;
    if (!priority) {
        return res.status(400).json({ error: 'Priority is required' });
    }
    // Here you would typically fetch tasks by priority from a database
    res.json({ message: 'Tasks by priority fetched', priority });
}
);
app.get('/tasks/overdue', (req, res) => {
    // Here you would typically fetch overdue tasks from a database
    res.json({ message: 'Overdue tasks fetched' });
}
);
app.get('/tasks/completed', (req, res) => {
    // Here you would typically fetch completed tasks from a database
    res.json({ message: 'Completed tasks fetched' });
}
);
app.get('/tasks/pending', (req, res) => {
    // Here you would typically fetch pending tasks from a database
    res.json({ message: 'Pending tasks fetched' });
}
);