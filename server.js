const express = require('express');

const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);


const PORT = process.env.PORT || 5020;
server.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = server;