//THIS FILE TO ESTABLISH A CONNECTION WITH THE DB
require("dotenv");
const { connect, connection } = require('mongoose');

//CONNECTING CODE
connect('mongodb://localhost', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch((err) => 
    console.log(err));

//EXPORT IT
module.exports = connection;

