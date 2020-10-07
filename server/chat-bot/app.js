const express=require('express');
const socket= require('socket.io');
const app=express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/game', (req,res)=> {
    res.render('game');
});

const server=app.listen(3000,() => {
    console.log("Server is running at port 3000");
});

const io=socket(server);


io.on('connection', (socket)=>{
    console.log("New user connected");

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });

    socket.on('move', function(msg) {
        socket.broadcast.emit('move', msg); 
     });
});
