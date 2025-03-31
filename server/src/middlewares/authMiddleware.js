const {verifyToken} = require("../utils/jwtUtils");
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = verifyToken(token);
        console.log('decoded: ', decoded)
        req.user = { id: decoded.id, role: decoded.role };
        console.log(req.user)
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;