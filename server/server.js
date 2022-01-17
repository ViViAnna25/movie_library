const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const moviesRoutes = require('./routes/routes');
server.use('/movies', moviesRoutes);

server.get('/', (req, res) => res.send('Welcome to the movie database'));

module.exports = server;
