const http=require('http')

// const server=http.createServer();

// server.on('connection', (req, res) => {
//     console.log('new connection...');
// })

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('vikash')
        res.end()
    }

    if(req.url==='/paisa'){
        res.write('1000020202020 rupees')
        res.end()
    }
})

server.listen(3000)

console.log('server listening on port 3000');