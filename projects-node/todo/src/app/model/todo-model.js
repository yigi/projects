const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema(
    {
        title: String,
        priority: String,
        status: String,
        todo_type: String,
        description: String
    },
    {
        timeStamps: true
    }
);

module.exports = mongoose.model('ToDo', ToDoSchema);