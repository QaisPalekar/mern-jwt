const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authController = require('./controllers/auth');
const userController = require('./controllers/user');

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

app.use(authController);
app.use(userController);


const server = app.listen(process.env.PORT, function () {
    console.log(`App started on port ${process.env.PORT}`)
});