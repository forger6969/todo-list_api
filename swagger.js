const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task API',
      version: '1.0.0',
      description: `
REST API для управления задачами (Todo).

Возможности:
- Создание задачи
- Получение всех задач
- Получение задачи по ID
- Изменение статуса
- Изменение названия
      `
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Local server'
      }
    ],
    tags: [
      {
        name: 'Tasks',
        description: 'Операции с задачами'
      }
    ],
    components: {
      schemas: {
        Task: {
          type: 'object',
          required: ['id', 'title', 'completed'],
          properties: {
            id: {
              type: 'string',
              example: 'a1b2c3'
            },
            title: {
              type: 'string',
              example: 'Learn Express'
            },
            completed: {
              type: 'boolean',
              example: false
            }
          }
        },
        CreateTaskDto: {
          type: 'object',
          required: ['title'],
          properties: {
            title: {
              type: 'string',
              example: 'Learn Swagger'
            }
          }
        },
        UpdateStatusDto: {
          type: 'object',
          required: ['completed'],
          properties: {
            completed: {
              type: 'boolean',
              example: true
            }
          }
        },
        UpdateTitleDto: {
          type: 'object',
          required: ['title'],
          properties: {
            title: {
              type: 'string',
              example: 'New title'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Task not found'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js']
};

module.exports = swaggerJSDoc(options);
