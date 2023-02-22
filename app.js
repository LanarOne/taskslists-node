const express = require('express');
const app = express();
const db = require('./src/db/db');
const bodyParser = require('body-parser');
const Task = require('./src/models/Tasks');
const TaskList = require('./src/models/TasksLists');
const User = require('./src/models/User')

app.use(bodyParser.json());

require('./src/routes/addUser')(app, User);
require('./src/routes/login')(app, User);
require('./src/routes/test')(app);


app.listen(3003, ()=>{
    console.log('le server se lance sur le prot 3002');
})