const express = require('express');
const app = express();
app.use(express.json()); // Enable JSON parsing

app.post('/tasks', (req, res) => {
    // Implement your logic to handle tasks
});

app.listen(8001, () => {
    console.log('Server is running on port 8001');
});
