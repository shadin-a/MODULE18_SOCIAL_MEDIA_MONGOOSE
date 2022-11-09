const app = require('express').Router();
const userRoutes = require('./user_routes');
const thoughtRoutes = require('./thoughts_route.js');

app.use('/users', userRoutes);
app.use('/thoughts', thoughtRoutes);

module.exports = app;