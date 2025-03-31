const TaskEntity = require('../models/task.model.js');
const {filters} = require("pug");

class TaskService {
    async createTask(title, description, status, createdBy) {
        try {
            const task = new TaskEntity({
                title, description, status, createdBy
            });
            await task.save();
            return task;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getTask(id) {
        try {
            return await TaskEntity.findById(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateTask(id, title, description, status) {
        try {
            return await TaskEntity.findByIdAndUpdate(id, {title, description, status}, {
                new: true, // Возвращать обновлённый документ
                runValidators: true // Запускать валидацию при обновлении
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteTask(id) {
        try {
            return await TaskEntity.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getTasksByUser(userId) {
        try {
            return await TaskEntity.find({ createdBy: userId})
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
module.exports = new TaskService();