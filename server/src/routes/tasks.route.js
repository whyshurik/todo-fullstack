const Router = require('express')
const router = new Router()
const taskController = require('../controllers/task.controller')
const authMiddleware = require("../middlewares/authMiddleware");
const accessMiddleware = require("../middlewares/accessMiddleware");

router.post('/:userId', authMiddleware, accessMiddleware(['admin']), taskController.create)

router.get('/:userId/:id', authMiddleware, accessMiddleware(['admin']), taskController.getById)
router.get('/:userId', authMiddleware, accessMiddleware(['admin']), taskController.getAllByUser);
router.put('/:userId/:id', authMiddleware, accessMiddleware(['admin']), taskController.update)

router.delete('/:userId/:id', authMiddleware, accessMiddleware(['admin']), taskController.delete)

module.exports = router