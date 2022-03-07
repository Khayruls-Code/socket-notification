import { Server } from "socket.io";
const port = 5000 || process.env.PORT
import cors from 'cors'
cors()
const io = new Server({
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {

  io.emit('frstEvent', 'This is my first event')


  socket.on('sendNotification', data => {
    io.emit('sendNotification', data)
    console.log(data)
  })

  socket.on('disconnect', () => {
  })
});

io.listen(port);