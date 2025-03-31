const UserEntity = require('../models/user.model.js');
const User = require("../models/user.model");
const {generateToken} = require("../utils/jwtUtils");

class UserService {

    async getAllUsers() {
        try {
            return await UserEntity.find();
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getUserById(id) {
        try {
            return await UserEntity.findById(id);
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async deleteUser(id) {
        try {
            return await UserEntity.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
module.exports = new UserService();