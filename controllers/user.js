const app = require("express").Router();
const Thought = require("../models/thought");
const User = require("../models/user");

module.exports = {

    //GET ALL USERS
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    //GET USER BY ID
    getSingleUser(req, res) {
        User.findById(req.params.id)
        .then((user) => (!user
            ? res.status(404).json({ message: 'Cannot find that user!' })
            : res.json(user)))
          .catch((err) => res.status(500).json(err));
    },
    //CREATE A NEW USER

    //UPDATE USER BY ID

    //DELETE A USER BY ID

    //ADD A FRIEND TO USER FREINDS

    //DELETE A FRIEND FROM USER FRIENDS

}