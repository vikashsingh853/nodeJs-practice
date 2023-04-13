// Express fast and lightweight framework to building web applications

// restful services

//client and server -> http protocol(requet clint to server)
/*

REST-> representational states transfer 
CRUD -> crud operations

http methods -> get , post , put,delete


*/

const config=require('config')

const express = require('express');
const app = express();
app.use(express.static('public'))

app.get('/', (req, res) =>{
     res.send('Welcome')
})

// configuration
console.log(`application name ${config
.get('name')}`);
console.log(`application mail ${config
.get('mail.host')}`);
console.log(`application pass ${config
.get('mail.password')}`);

app.listen(3000)