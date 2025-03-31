const accessMiddleware = (requiredRoles) => {
    return (req, res, next) => {
        console.log(requiredRoles)
        console.log('req.user: ', req.user)
        console.log(req.user.id)
        console.log(req.params)

        // Проверяем userId, а не неправильный параметр
        console.log(req.user.id === req.params.userId || requiredRoles.includes(req.user.role));

        if (req.user.id === req.params.userId || requiredRoles.includes(req.user.role)) {
            next();
        } else {
            return res.status(403).json({message: 'Access denied'});
        }
    };
};
module.exports = accessMiddleware;