module.exports = (io) => {
    io.on('connection', (socket) => {

        console.log('a user connected');

        socket.on('start-stream', (data) => {  
            console.log(data)
        })

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

    });
}