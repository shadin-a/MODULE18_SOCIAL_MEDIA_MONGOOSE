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
                : res.json(user)))
            .catch((err) => res.status(500).json(err));
    },
    //POST A NEW THOT

    //UPDATE EXISTING THOT

    //DELETE EXISTING THOT

    //POST A THOT REACTION

    //DELETE A THOT REACTION

}