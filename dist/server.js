"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware para processar JSON e dados de formulário
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
let user = '';
app.get('/print', (req, res) => {
    res.json(user);
    res.send('Hello World!');
});
app.post('/submit', (req, res) => {
    user = req.body;
    console.log(user);
    res.send('dados recebidos');
});
// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
