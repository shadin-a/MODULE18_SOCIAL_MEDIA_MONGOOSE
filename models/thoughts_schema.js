//SCHEMA BASED ON USER STORY FOR THOUGHTS
const {Schema, model} = require('date-fns');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reaction_schema = require ('reaction_schema');
const Thought = model('Thought', ThoughtSchema);

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
toJSON: {
    virtuals: true,
    getters: true,
},
    id: false,
 
reaction: [],
})

//VIRTUAL

ThoughtSchema.virtual('reactionCount')
.get(function(){
    return this.reaction.length;
})

module.exports = Thought;