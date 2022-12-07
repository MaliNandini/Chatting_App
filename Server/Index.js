const express = require("express");
const app = express();
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

app.use(cors());
const array = [];

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);

  socket.on("send_Message", (data, id) => {
    array[socket.id] = data;
    console.log(data);
    io.emit("receive_message", data, id);
  });

  // socket.emit("welcome", { massg: `welcome to the chat` });
});

server.listen(5000, () => {
  console.log("SERVER IS RUNNING");
});
