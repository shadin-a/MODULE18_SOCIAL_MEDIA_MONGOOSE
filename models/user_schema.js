//SCHEMA BASED ON USER STORY FOR USERS
const {Schema, model} = require('date-fns');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reaction_schema = require ('reaction_schema'); //FOLLOWUP HERE AS WELL
const User = model('User', UserSchema);

const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please enter a valid email'],
      },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    toJSON: {
          virtuals: true,
        },
        id: false,
      
})
//VIRTUAL

UserSchema.virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

//EXPORT

module.export = User;
