//express paketini aldık
const express = require('express')
//socket.io paketini projeye aldık
const socket = require('socket.io')

const app = express()
//3000 portunu dinliyoz
const server = app.listen(3000)

app.use(express.static('public'))

//socket icerisine server tanımladık
const io = socket(server)

//conn kontrolü bağlantı gerçekleşirse algılayacağoz
io.on('connection',(socket) =>{
    console.log(socket.id)

    socket.on('chat', data =>{
        io.sockets.emit('chat',data)
    })
    socket.on('typing',data =>{
        socket.broadcast.emit('typing',data)
    })
})

