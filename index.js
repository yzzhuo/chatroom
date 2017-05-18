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
    console.log(users);
    socket.broadcast.to(socket.id).emit('init onliner', users);
    io.emit('connect message',name);
  });
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg);
  });
  socket.on('disconnect',function(){
    delete users[socket.id];
    io.emit('disconnect message',users[socket.id]);
  });
});

http.listen(8000, function(){
  console.log('listening on 8000')
});