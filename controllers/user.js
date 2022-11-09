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
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //UPDATE USER BY ID
    updateUser(req, res) {
        User.findByIdAndUpdate(
            req.params.id,
            {
                username: req.body.username,
                email: req.body.email,
            },
        ).then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //DELETE A USER BY ID
    deleteUser(req, res) {
        User.findByIdAndDelete(
            req.params.id
        ).then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //ADD A FRIEND TO USER FREINDS
    addFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId , 
            { $addToSet: 
            { friends: req.params.friendId } 
        })
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },

    //DELETE A FRIEND FROM USER FRIENDS
      deleteFriend(req,res) {
        User.findByIdAndDelete(
            req.params.userId,
            {$pull:
            {friends: req.params.friendId }}
        )
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
      }
}