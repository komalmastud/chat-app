const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
  }); // Corrected syntax error here
});

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

server.listen(9000, () => console.log(`Server started at 9000 PORT`));
