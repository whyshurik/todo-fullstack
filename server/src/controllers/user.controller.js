const UserService = require('../services/user.service');

class UserController {
    async getAll(req, res, next) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    async deleteUser(req, res, next) {
        const id = req.params.id;
        try {
            const user = await UserService.deleteUser(id);
            if (!user) {
                res.status(404).json({message: 'User not found'});
            }
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}
module.exports = new UserController();

