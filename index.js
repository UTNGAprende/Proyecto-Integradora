//Este es un comentario
const http = require('http');
const puerto = 3500

var apli = http.createServer(function(request, response){
    response.writeHead(200, {
        'Content-type':'text/html'
    })
    response.write("<h1>Hola mundo</h1>");
    response.end();
});

apli.listen(puerto);
console.log('INICIANDO SERVIDOR...');