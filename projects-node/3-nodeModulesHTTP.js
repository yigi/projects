const http = require('http');
const server = http.createServer((request,response) => {
    
    if( request.url === '/')
        response.end ('Welcome to our home page')

    if( request.url === '/about')
        response.end ('Welcome to about home page')

})

server.listen(5000)