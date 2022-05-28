const port = 8080;
const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const { engine } = require('express-handlebars');
const { databaseProductos } = require('./public/productos');
const { databaseMensajes } = require('./public/mensajes');

const productos = databaseProductos.obtenerTodos();
const mensajes = databaseMensajes.obtenerTodos();

const app = express();

app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', engine({defaultLayout: "index"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('public'));

httpServer.listen(port, () => console.log(`App listening to port ${port}`));





app.get('/', (req, res) => {
    res.render('inicio', { titulo: 'PRODUCTO', titulo2: 'PRECIO', titulo3: 'THUMBNAIL', productos, mensajes});
});




io.on('connection', (socket)=>{
    
    console.log('Usuario conectado: ' + socket.id);


    socket.on('prod', (data)=>{
        productos.push(data);
        console.log(productos);
        io.sockets.emit(console.log(data))
    })

    socket.on('mensaje', (data)=>{
        mensajes.push(data);
        console.log(mensajes);
        io.sockets.emit(console.log(data));

    })

})


