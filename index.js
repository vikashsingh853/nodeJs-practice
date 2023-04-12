// Express fast and lightweight framework to building web applications

// restful services

//client and server -> http protocol(requet clint to server)
/*

REST-> representational states transfer 
CRUD -> crud operations

http methods -> get , post , put,delete


*/

const express = require('express');
const app = express();
app.use(express.static('public'))

app.get('/', (req, res) =>{
     res.send('Welcome')
})

app.listen(3000)