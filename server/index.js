const express = require("express");
const app = express();
const port = process.env.PORT || 8800;

const server = app.listen(port,(err)=>{
	if (err){
		console.log(err);
		return false;
	}
	console.log(port + " is opened");
});

var io = require("socket.io")(server);

io.on("connection", (socket)=>{
	console.log(socket.id + " connected");
	io.emit("user_connected")
	
	socket.on("message",(data)=>{
		alert(socket.id + "said" + data)
	})
});