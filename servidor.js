const http = require('http');
const chalk = require('chalk');
const host = 'localhost'
const port = 8000

 const server = http.createServer((req, res) => {
   
    let respuestaJSON = {
      nombre: "Darwin",
      mensaje: "Hola desde mi servidor"
    };

    res.writeHead(200, {'content-type' : 'application/json'});
    res.end(JSON.stringify(respuestaJSON));
 });

 server.listen(port, host, () => {
    console.log(chalk.green(`Servidor funcionando en ${host}:${port}`))
 });