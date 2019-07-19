/*console.log('Hi world!');

const mat = require('./mat.js');

console.log(mat);

console.log(mat.add(2,1));
console.log(mat.substract(2,1));
console.log(mat.multiply(1,2));
console.log(mat.divide(2,0));*/

//const os = require('os');
//permite trabajar ocn archivos del sistema
//const fs = require('fs');


//crar un servidor y maj¿nejarlo a voluntad
/*const http=require('http');
const colors=require('colors')

const handServer = function(req,res){
    //ejecutar el puerto y mensajes a mostrar
res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Hola bienvenido</h1>');
    res.write('un simple texto :3');
    res.end();
}
const server = http.createServer(handServer);

server.listen(3000,function() {
    console.log('server port 3000'.green);

})*/

/*
console.log(os.platform());
console.log(os.release());
console.log(os.freemem(),' bytes');
console.log(os.totalmem(),' bytes');*/

//codigo asincrono/tareas del sistema operativo
/*fs.writeFile('./texto.txt','Linea de pruba joto :3',function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado :3');
})*/
//node js permite trabajar con el codigo js mientras se ejecuta la accion anterior del sistema
//console.log('ultima linea de codigo');

/*fs.readFile('./texto.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});*/






//pruebas mysql
/*query('SELECT * FROM users', function(err,users){
    if(err){
        console.log(err);
    }
})*/

//crear servidor com express
const express = require ('express');
const app=express();
const colors= require('colors');
const path=require('path');

//settings
app.set('port',3000);
//app.engine('html',require('ejs').renderFile); --- Renderizar archivos HTML a EJS
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(require('./routes/index.js'));

app.listen(app.get('port'),()=>{
    console.log('server on port'.red, app.get('port'));
});
