const TaskService = require('../services/task.service');
class TaskController {
    async create(req, res, next) {
        const {title, description, status} = req.body;
        try {
            const task = await TaskService.createTask(title, description, status, req.params.userId);
            res.status(201).json(task);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    async getAllByUser(req, res) {
        try {
            console.log(req.params)
            const tasks = await TaskService.getTasksByUser(req.params.userId)
            console.log(tasks)
            res.status(200).json(tasks)
        } catch (error) {
            res.status(404).json({message: 'Tasks not found'})
        }
    }
    async getById(req, res) {
        try {
            const task = await TaskService.getTask(req.params.id);
            if (task.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
                return res.status(403).json({message: 'Access denied'});
            }
            if (!task) {
                return res.status(404).json({message: 'Task not found'});
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    async update(req, res) {
        const id = req.params.id
        const {title, description, status} = req.body;
        try {
            const task = await TaskService.updateTask(id, title, description, status);
            if (!task) {
                return res.status(404).json({message: 'Task not found'});
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(400).json({message: error.message});
        }

    }

    async delete(req, res) {
        const id = req.params.id;
        try {
            const task = await TaskService.deleteTask(id);
            if (!task){
                return res.status(404).json({message: 'Task not found'});
            }
            res.status(200).json({message: `Task with id ${id} was deleted successfully.`});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

module.exports = new TaskController();