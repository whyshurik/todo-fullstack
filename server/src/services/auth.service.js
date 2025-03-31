// src/services/authService.js
const UserEntity = require('../models/user.model');
const { generateToken } = require('../utils/jwtUtils');

class AuthService {
    async register(username, password) {
        const userExists = await UserEntity.findOne({
            username: username
        });
        const role = 'default user';
        if (userExists) throw new Error('User already exists');
        try {
            const user = new UserEntity({
                username, password, role
            })
            await user.save();
            return { user};
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async login(username, password, role) {
        const user = await UserEntity.findOne({
            username: username
        });
        if (!user) throw new Error('Invalid credentials');
        const isMatch = await user.matchPassword(password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = generateToken(user._id, user.role);
        return { user, token };
    }
}

module.exports = new AuthService();
