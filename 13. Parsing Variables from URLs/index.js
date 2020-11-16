// packages/modules
const fs = require('fs')  // gives us file access capabilities
const http = require('http')   // gives us networking capabilities (building and http server )
const url = require('url')   // gives us networking capabilities (building and http server )


///////////////////////////////////////////
///             server start
///////////////////////////////////////////

const datas = fs.readFileSync('./data.json', 'utf-8')

const server = http.createServer((req, res) => {
    // const pathname = req.url
    // console.log(pathname)
    // console.log(url)
    // console.log(url.parse(req.url, true))
    const {query, pathname} = url.parse(req.url, true)
    console.log(query)
    console.log(pathname)

    if (pathname==='/' || pathname==='/overview') {
        res.end('response from Overview')
    }
    else if(pathname==='/products'){
        console.log(query)
        const products = datas
        const product = datas[1]
        console.log(product)
        res.writeHead(200, {
            'Content-type' : 'application/json'
        })
        res.end(datas)
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