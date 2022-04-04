// all routes HTTP method (GET/PUT/POST/DELETE) will be present here

module.exports = (app) => {

    // import ToDo controller here, which contains method for all CRUD operations
    const ToDo = require('../controller/todo-controller');

    // Create new ToDo Task
    app.post('/create', ToDo.create);

    // fetch single ToDo Task
    app.get('/fetch/:id', ToDo.findOne);

    // fetch all ToDo Task
    app.get('/fetch', ToDo.findAll);

    // Update existing ToDo Task
    app.put('/update/:id', ToDo.update);

    // Delete existing ToDo Task
    app.delete('/delete/:id', ToDo.delete);

    // Delete all ToDo Task
    app.delete('/delete', ToDo.deleteAll);


}