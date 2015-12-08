var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){          //when a new connection is established

  socket.on('chat', function(data){            //on receiving chat messages from client
  	
    io.emit('chat', data);                     //send received messages to all clients including client who sent it
    //using io.emit() so that client who sent the data also receives it 
  });

  socket.on('pdown', function(data){            //on receiving mouse move events from clients

  	socket.broadcast.emit('pdown', data);       //send received data to all clients except the client who sent it 
    //using broadcast so that client who sent the data does not receive it
  });


  socket.on('pmove', function(data){            //on receiving mouse move events from clients

    socket.broadcast.emit('pmove', data);       //send received data to all clients except the client who sent it 
    //using broadcast so that client who sent the data does not receive it
  });


  socket.on('pup', function(data){            //on receiving mouse move events from clients

    socket.broadcast.emit('pup', data);       //send received data to all clients except the client who sent it 
    //using broadcast so that client who sent the data does not receive it
  });
});


http.listen(8080, '192.168.1.100')


// http.listen(8080, function(){
//   console.log('listening on *:8080');
// });

