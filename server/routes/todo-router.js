const express = require('express')

const TodoController = require('../controllers/todo-controller')

const router = express.Router()

router.post('/todo', TodoController.createTodo)
router.put('/todo/:id', TodoController.updateTodo)
router.delete('/todo/:id', TodoController.deleteTodo)
router.get('/todo/:id', TodoController.getTodoById)
router.get('/todos', TodoController.getTodos)

module.exports = router
