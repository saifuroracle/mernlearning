// packages/modules
const fs = require('fs')  // gives us file access capabilities
const http = require('http')   // gives us networking capabilities (building and http server )


///////////////////////////////////////////
///             server start
///////////////////////////////////////////

const server = http.createServer((req, res) => {
    // send back a respond to the client
    console.log(res)
    res.end('Hello from the server')
})

server.listen(3000, '127.0.0.1', ()=> {
    console.log('Listening to request on port 3000')
})

///////////////////////////////////////////
///             server end
///////////////////////////////////////////