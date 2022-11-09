//SCHEMA BASED ON USER STORY FOR USERS
//const {Schema, model} = require('date-fns');
const {Schema, model} = require('mongoose');
//const Schema = mongoose.Schema;
//const reaction_schema = require ('reaction_schema'); //FOLLOWUP HERE AS WELL


var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

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
    },
    {
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
const User = model('User', UserSchema);
module.export = User;
