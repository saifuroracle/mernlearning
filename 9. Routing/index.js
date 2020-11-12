// packages/modules
const fs = require('fs')  // gives us file access capabilities
const http = require('http')   // gives us networking capabilities (building and http server )
const url = require('url')   // gives us networking capabilities (building and http server )


///////////////////////////////////////////
///             server start
///////////////////////////////////////////

const server = http.createServer((req, res) => {
    const pathName = req.url

    if (pathName==='/' || pathName==='/overview') {
        res.end('response from Overview')
    }
    else if(pathName==='/product'){
        res.end('response from product')
    }
    else{
        res.writeHead(404,{
            'Content-type' : 'text/html',
            'my-own-haeder' : 'hello world'
        })
        res.end('<h1>Page not found</h1>')
    }
})

server.listen(3000, '127.0.0.1', ()=> {
    console.log('Listening to request on port 3000')
})

///////////////////////////////////////////
///             server end
///////////////////////////////////////////