//SCHEMA BASED ON USER STORY FOR THOUGHTS
const {compareAsc, format} = require('date-fns');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reaction_schema = require ('reaction_schema');

const ThoughtSchema = new Schema({
thoughtText: {type: String, 
    required: true, 
    minLength: 1, 
    maxLength: 280
},
createdAt: {
    type: Date,
    default: Date.now,
    get: time => format(time, 'MM-dd-yyyy')
},
username: {
    type: String,
    required: true,
},
reaction: [],
})

//VIRTUAL

ThoughtSchema.virtual('reactionCount')
.get(function(){
    return this.reaction.length;
})

export thoughts_schema 