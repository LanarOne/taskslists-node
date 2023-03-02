const express = require('express');
const app = express();
const db = require('./src/db/db');
const bodyParser = require('body-parser');
const Task = require('./src/models/Task');
const TaskList = require('./src/models/TasksList');
const User = require('./src/models/User');
const Role = require('./src/models/Role');
const helmet = require('helmet');
const cors = require('cors');
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
const cookieParser = require('cookie-parser');
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origine non autorisée par CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app
    .use(bodyParser.json())
    //helmet -> middleware pour aider a proteger contre les injections de script, les attaques XSS, les en-têtes HTTP malveillants, etc.
    .use(helmet())
    //delimite l'acces aux endpoints
    .use(cors(corsOptions))
    .use(cookieParser());

//path crud user
require('./src/routes/user/addUser')(app, User);
require('./src/routes/user/login')(app, User);
require('./src/routes/user/deleteUser')(app, User);
require('./src/routes/user/updateUser')(app, User);
require('./src/routes/user/showUser')(app, User);
//path crud taskslists
require('./src/routes/tasksLists/addTasksLists')(app, TaskList, User);
require('./src/routes/tasksLists/findAllTasksLists')(app, TaskList, Task, User);
require('./src/routes/tasksLists/findByPkTasksLists')(app, TaskList, Task, User);
require('./src/routes/tasksLists/destroyTasksLists')(app, TaskList, Task, User);
require('./src/routes/tasksLists/updateTasksLists')(app, TaskList, User);
//path crud list
require('./src/routes/task/addTask')(app, Task, User);
require('./src/routes/task/deleteTask')(app, Task, User);
require('./src/routes/task/active')(app, Task, User);
require('./src/routes/task/updateTask')(app, Task, User);
require('./src/routes/task/findTaskByPk')(app, Task, User);
//path for test auth and token (jwt)
require('./src/routes/test')(app);


const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
