'use strict';

const express = require('express'); //npm install -S express
require('dotenv').config(); //npm install -S dotenv

const app = express();
const PORT = process.env.PORT || 3001;

//this points app to /public
app.use(express.static('./public'));

//app.get('/', (request, response) => response.send('Hello World!'));

app.get('/hello',(request, response) => response.send('This is the other text')); //localhost:3000/hello

app.listen(PORT, () => console.log(`app is listening on port ${PORT}!`))
//terminal: nodemon (or npm start)