const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const cors = require('cors');
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/* 
//configure body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json()); */

app.use(cors())

//CONNECT TO DB
const mongoString = process.env.DB_URL
mongoose.connect(mongoString);

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//Import Routes
const routes = require('./routes/routes');

const authRoute = require('./routes/auth');

const verifyToken = require('./Routes/verifyToken');

app.use('/api', routes);
app.use('/api/register',authRoute);


app.get("/", (req, res) => {
    res.send("Express on Vercel");
  });

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
