const http = require("http");
const { Server } = require("socket.io");

const httpServer = http.createServer();

const io = new Server(httpServer, {
  cors: {
    // origin: "https:futuregeek.tech", // Replace with your frontend URL
    origin: "https://amicolo.com", // Replace with your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

let users = [];

io.on("connection", (socket) => {
  socket.on("join_room", ({ roomId, user }) => {
    socket.join(roomId);
    console.log(`${user.first_name} joined room ${roomId}`);
  });
  socket.on("send_msg", ({ room, message, sender, reciver, createdAt }) => {
    // Broadcast the message to everyone in the room
    io.to(room.id).emit("groupMessage", {
      createdAt,
      message,
      sender,
      reciver,
      room,
    });
  });
  socket.on("inputfocus", async ({ room, localuserID, value }) => {
    io.to(room.id).emit("inputfocusserver", {
      room,
      localuserID,
      value,
    });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Socket.io server is running on port ${PORT}`);
});
