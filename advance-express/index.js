const express = require('express');
const logger=require('./middleware/logger');
const authenticating=require('./middleware/authenticating');
const helmet=require('helmet');
const morgan=require('morgan');
const home=require('./routes/home');
const startupDebbuger=require('debug')('app:startup')
const app=express();


/*
Middleware
configuration
debugging
templating engine
*/

/*
template engine 
----->pug

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

// template engine
app.set('view engine','pug');
app.set('views','./views')

app.use('/view',home)



app.get('/', function(req, res){
    res.send('Welcome advance express')
})

app.listen(3000);