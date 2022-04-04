// All controller logic for CRUD operation will stay here

const ToDoModel = require('../model/todo-model');

// Create and save ToDo Task
exports.create = (req, res) => {
    const REQUEST_BODY = req.body;

    // validate request_body
    if (!REQUEST_BODY) {
        return res.status(400).send({
            message: 'payload can not be empty'
        });
    }

    const todoPayload = new ToDoModel({
        title: REQUEST_BODY.title,
        priority: REQUEST_BODY.priority,
        status: REQUEST_BODY.status,
        todo_type: REQUEST_BODY.todo_type,
        description: REQUEST_BODY.description
    });

    todoPayload.save()
        .then((data) => {
            res.status(200).send({
                message: `task created successfully`,
                statusCode: res.statusCode,
                data: data,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: `unable to create task. Error: ${err.message}`,
                statusCode: res.statusCode
            });
        });
};

// fetch single ToDo Task
exports.findOne = (req, res) => {
    const id = req.params.id;

    ToDoModel.findById(id)
        .then((task) => {
            if (!task) {
                return res.status(404).send({
                    data: task,
                    message: `Task id: ${id} not found`,
                    statusCode: res.statusCode
                })
            }
            res.status(200).send({
                data: task,
                message: `Successfully fetched task for id: ${id}`,
                statusCode: res.statusCode
            });
        })
        .catch(err => {
            if (err.kind === 'ObjectID') {
                return res.status(400).send({
                    message: `task not found. ID: ${id}`,
                    statusCode: res.statusCode

                });
            }

            return res.status(500).send({
                message: `Error fetching task. Id: ${id}`,
                statusCode: res.statusCode
            })
        });
};

// fetch all ToDo Task
exports.findAll = (req, res) => {
    ToDoModel.find()
        .then(task => {
            if (!task.length) {
                return res.status(204).send({
                    data: task,
                    statusCode: res.statusCode,
                    message: `Task List is empty`
                });
            }

            res.status(200).send({
                count: task?.length || 0,
                message: 'all task fetched successfully!',
                statusCode: res.statusCode,
                data: task,
            })
        })
        .catch(err => {
            res.status(500).send({
                message: `${err.message} || unable to fetch task`,
                statusCode: res.statusCode
            })
        });
};

// Update existing ToDo Task
exports.update = (req, res) => {
    const id = req.params.id;
    const REQUEST_BODY = req.body;

    // validate reqest
    if (!REQUEST_BODY) {
        return res.status(400).send({
            message: `task content can not be empty`,
            statusCode: res.statusCode
        });
    }

    const todoPayload = {
        title: REQUEST_BODY.title,
        priority: REQUEST_BODY.priority,
        status: REQUEST_BODY.status,
        todo_type: REQUEST_BODY.todo_type,
        description: REQUEST_BODY.description
    };

    ToDoModel.findByIdAndUpdate(id, todoPayload, { new: true })
        .then(task => {
            if (!task) {
                return res.status(404).send({
                    message: "task not found with id " + id,
                    statusCode: res.statusCode
                });
            }
            res.status(200).send({
                message: `task updated successfully`,
                statusCode: res.statusCode,
                data: task
            });
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `task not found. ID: ${id}`,
                    statusCode: res.statusCode
                });
            }

            res.status(500).send({
                message: `Error updating atsk. ID: ${id}`,
                statusCode: res.statusCode
            });
        });

    };

// Delete existing ToDo Task
exports.delete = (req, res) => {
    const id = req.params.id;

    ToDoModel.findByIdAndRemove(id)
        .then(task => {
            if (!task) {
                return res.status(404).send({
                    message: `Task ID: ${id} not found!`,
                    statusCode: res.statusCode
                })
            }
            res.status(200).send({
                message: `task deleted successfully. ID: ${id}`,
                statusCode: res.statusCode
            })
        })
        .catch(err => {
            if (err.kind === "ObjectID" || err.name === 'NotFound') {
                return res.status(404).send({
                    message: `task id: ${id} not found!`,
                    statusCode: res.statusCode
                });
            }
            return res.status(500).send({
                message: `Error deleting task id: ${id}`,
                statusCode: res.statusCode
            });
        });
};

// Delete all ToDo Task
exports.deleteAll = (req, res) => {
    ToDoModel.deleteMany()
        .then(() => {
            res.status(200).send({
                statusCode: res.statusCode,
                message: `All task deleetd successfully`
            });
        })
        .catch(err => {
            return res.status(500).send({
                statusCode: res.statusCode,
                message: `${err.message} || unable to delete task`
            });
        });
};


