const app = require('express').Router();
const { get } = require('mongoose');
const { getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend } = require('../../controllers/user');

app.get('/', getUsers)

module.exports = app;

