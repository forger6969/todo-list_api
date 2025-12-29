const express = require('express')
const routes = express.Router()

const {createTask , getAll , setStatus , getById , setTitle} = require('../controllers/Task.controller');
const { route } = require('../app');
console.log(createTask , getAll );


/**
 * @swagger
 * /task:
 *   post:
 *     summary: Create a new task
 *     description: Создаёт новую задачу с полем title
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTaskDto'
 *     responses:
 *       200:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Task created!
 *                 newTask:
 *                   $ref: '#/components/schemas/Task'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
routes.post('/task', createTask);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Возвращает список всех задач
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Array of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
routes.get('/tasks', getAll);

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Get task by ID
 *     description: Возвращает задачу по её ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: a1b2c3
 *     responses:
 *       200:
 *         description: Task found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found
 */
routes.get('/task/:id', getById);

/**
 * @swagger
 * /setTask/{id}:
 *   patch:
 *     summary: Update task status
 *     description: Изменяет поле completed
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateStatusDto'
 *     responses:
 *       200:
 *         description: Status updated
 *       400:
 *         description: completed must be boolean
 *       404:
 *         description: Task not found
 */
routes.patch('/setTask/:id', setStatus);

/**
 * @swagger
 * /task/{id}:
 *   patch:
 *     summary: Update task title
 *     description: Изменяет название задачи
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTitleDto'
 *     responses:
 *       200:
 *         description: Title updated
 *       400:
 *         description: Title is required
 *       404:
 *         description: Task not found
 */
routes.patch('/task/:id', setTitle);


module.exports = routes