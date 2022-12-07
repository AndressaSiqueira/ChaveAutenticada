const app = require('./app.js');
const server = require("http").createServer(app);
const host = '0.0.0.0'
const io = require("socket.io")(server, {
    cors: {
        origin: ["*"],
        methods: ["GET", "POST"]
    }
});

// server-side
io.on("connection", (socket) => {
    console.log(`Novo cliente conectado ${socket.id}`);

    socket.on("disconnect", () => {
        console.log("Cliente desconectado");
    });

});


server.listen(3000,host, () => console.log("Servidor rodando na porta 3000"));
