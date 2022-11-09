//THIS INDEX.JS BUILDS ON THE PATH THE APPLICATION CAN TAKE
const app = require('express').Router();
const userRoutes = require('./user_route');
const thoughtRoutes = require('./thoughts_route.js');

app.use('/users', userRoutes);
//app.use('/thoughts', thoughtRoutes);

module.exports = app;