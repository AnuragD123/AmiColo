// const http = require("http");
// const { Server } = require("socket.io");

// const httpServer = http.createServer();

// const io = new Server(httpServer, {
//     cors: {
//         origin: "http://localhost:3000", // Replace with your frontend URL
//         methods: ["GET", "POST"],
//         allowedHeaders: ["my-custom-header"],
//         credentials: true,
//     },
// });

// let room = [];

// io.on("connection", (socket) => {
//     // console.log("A user connected:", socket.id);
//     socket.on("join_room", (roomId) => {
//         const isRoomExist = room.find(data => data.id === roomId);
//         if (!isRoomExist) {
//             const data = { roomId, socketId: socket.id };
//             room.push(data);
//         }
//         // console.log("data", roomId);
//         // socket.join(roomId);
//         // socketRooms[socket.id] = roomId;
//         // console.log(socketRooms, "Socket");
//     });

//     socket.on("send_msg", (data) => {
//         console.log(data)
//         const roomfind = room.find(roomdata => roomdata.id == data?.room?.id);
//         if (roomfind) {
//             io.to(roomfind.socketId).emit('new_msg', {
//                 room,
//                 message,
//                 sender,
//                 reciver,
//                 createdAt,
//             });
//         }

//         // if (socket.id in socketRooms) {
//         //     const roomId = socketRooms[socket.id];
//         //     console.log("Room ID ", roomId);

//         //     // Emit the message to all sockets in the room
//         //     io.to(roomId).emit("new_msg", data);
//         //     console.log("Message sent to room:", roomId);
//         // } else {
//         //     console.log("Socket not in any room or room ID is undefined for the socket.");
//         // } console.log("User has not joined any rooms");
//         //This will send a message to a specific room ID
//         // io.to(data.roomId).emit("receive_msg", data);
//         // io.emit("receive_msg", data);
//     });

//     socket.on("disconnect", () => {
//         console.log("A user disconnected:", socket.id);
//     });
// });

// const PORT = process.env.PORT || 3001;
// httpServer.listen(PORT, () => {
//     console.log(`Socket.io server is running on port ${PORT}`);
// });