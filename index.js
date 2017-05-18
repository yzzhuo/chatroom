var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var users = {};

app.use(express.static('public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/login', function(req, res){
  res.sendFile(__dirname + '/login.html');
});

io.on('connection', function(socket){
  socket.on('set username', function(name){
    users[socket.id] = name;
    io.to(socket.id).emit('init onliner', users);
    socket.broadcast.emit('connect message',{id: socket.id, name: users[socket.id]});
  });
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg);
  });
  socket.on('disconnect',function(){
    socket.broadcast.emit('disconnect message',{ id: socket.id, name: users[socket.id]});
    delete users[socket.id];    
  });
});

http.listen(8000, function(){
  console.log('listening on 8000')
});