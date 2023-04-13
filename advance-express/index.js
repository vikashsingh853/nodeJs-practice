const express = require('express');
const logger=require('./logger');
const authenticating=require('./authenticating');
const helmet=require('helmet');
const morgan=require('morgan');
const startupDebbuger=require('debug')('app:startup')
const app=express();

/*
Middleware
configuration
debugging
templating engine
*/

// Middleware and middleware functions
//->middleware functions are functions that either return a response or passes control to anothre middleware
// route handlers is also a middleware, another is app.use(express.json()) -> request processing pipeline
// every request passs through middleware

app.use(express.json())

// Custom middleware

app.use(logger)
app.use(authenticating)

// Built in middleware
app.use(express.urlencoded({extended:true})) //key=value&&key=value // populate req.body
app.use(express.static('public')) //serve static content 


// third party middleware
app.use(morgan('tiny')) //log request
app.use(helmet()) // add header to request

// ENVIROMENTS 
console.log(`app-env:${app.get('env')}`);

// debbuger
startupDebbuger('started...')


app.get('/', function(req, res){
    res.send('Welcome advance express')
})

app.listen(3000);