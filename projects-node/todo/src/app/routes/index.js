module.exports = (app) => {

    const ToDo = require('../controller/todo-controller');

    app.post('/create', ToDo.create);
    app.get('/fetch/:id', ToDo.findOne);
    app.get('/fetch', ToDo.findAll);
    app.put('/update/:id', ToDo.update);
    app.delete('/delete/:id', ToDo.delete);
    app.delete('/delete', ToDo.deleteAll);
}