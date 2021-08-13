//Import modules
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')


// immport  .env
require('dotenv').config()

// import error middleware
const { notFound, errorHandler } =require('./middleware/errorMiddleware')

// import index router 
const indexrouter =require('./routes/index') 

//import secret key globally
global.config = require('./config')

//initialize app
const app = express()

//connect to mongodb
mongoose.connect('mongodb://localhost/housing_harshit',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Mongodb connect..'))
    .catch(err => console.error('Something went wrong check connection ',err))

app.use(cors({origin: 'http://localhost:3000'}));

 
//middleware
app.use(express.json())

//middleware for route
app.use('/', indexrouter)

// middleware of error handler
app.use(notFound)
app.use(errorHandler)


//port
const port = process.env.PORT ||3001;

// listen to createrd port
app.listen(port,()=>console.log(`Server  is running on ${port}`));   