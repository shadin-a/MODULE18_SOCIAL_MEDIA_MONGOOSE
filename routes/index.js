//THIS INDEX.JS IS TO DIRECT THE APPLICATION TO INDEX.JS FOR API

const app = require('express').Router();
const apiRoutes = require('./api');

app.use('/api', apiRoutes);

app.use((req, res) => res.send('Wrong route!'));

module.exports = app;