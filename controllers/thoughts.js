//THE ACTUAL ROUTES FOR EACH ELEMENT OF THE USER STORY FOR THOUGHTS
const Thought = require("../models/thought");

module.exports = {
    //GET A THOT (ALL)
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    //GET A THOT BY ID
    getSingleThought(req, res) {
        Thought.findById(req.params.id)
            .then((thoughts) => (!thoughts
                ? res.status(404).json({ message: 'Cannot find that thought!' })
                : res.json(thoughts)))
            .catch((err) => res.status(500).json(err));
    },
    //POST A NEW THOT
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id } },
          ))
          .then((user) => (!user
            ? res.status(404).json({message: 'One thought, no user!',})
            : res.json('Success! A thought was made!')))
          .catch((err) => res.status(500).json(err));
      },
    //UPDATE EXISTING THOT
      updateThought(req, res) {
        Thought.FindByIdAndUpdate(
            req.params.id, 
            {thoughtText: req.body.thoughtText,
              });
        
      }
    //DELETE EXISTING THOT

    //POST A THOT REACTION

    //DELETE A THOT REACTION

}