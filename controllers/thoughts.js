//THE ACTUAL ROUTES FOR EACH ELEMENT OF THE USER STORY FOR THOUGHTS
const Thought = require("../models/thought");

module.exports = {
    //GET A THOT (ALL)
    getThoughts(req, res) {
        Thought.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //GET A THOT BY ID

    //POST A NEW THOT

    //UPDATE EXISTING THOT

    //DELETE EXISTING THOT

    //POST A THOT REACTION

    //DELETE A THOT REACTION

}