// src/controllers/AuthController.js
const AuthService = require('../services/auth.service');

class AuthController {
    static async register(req, res) {
        try {
            const { username, password } = req.body;
            const { user, token } = await AuthService.register(username, password);
            res.status(201).json({ user, token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const { user, token } = await AuthService.login(username, password);
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = AuthController;
