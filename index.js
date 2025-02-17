"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Olá, TypeScript no Node.js!');
});
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
