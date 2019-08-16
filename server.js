const express = require('express');

const taskRouter = require('./project-task/tasks-router');

const server = express();

server.use(express.json());
server.use('/api/tasks', taskRouter);

module.exports = server;