//CODE TO CONNECT ALL FILES AND RUN IN INSOMNIA
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = 3000;

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//ACTION CODE 🎆 
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`You are up and running on ${PORT}!`);
    });
  });