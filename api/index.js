const express = require('express');
const app = express();
const cors = require('cors');

const porta = 3000;
const ImgController = require('./imgController');

app.use(cors());

app.get("/foto", (req, res) => {
    let imagem = new ImgController();
    res.status(200).json(imagem.listarImg())
});

app.get("/foto/:id", (req, res) => {
    let imagem = new ImgController();
    const foto = imagem.listarPorId(req, res);
    res.status(200).json(foto);
})

app.get("/photos/:id/comments", (req, res) => {
    let imagem = new ImgController();
    const comment = imagem.listarPorIdComments(req, res);
    res.status(200).json(comment)
})

app.post("/photos/:id/comments", (req, res) => {    
    res.status(201).end();
})

app.post("/login", (req, res) => {
    res.status(201).end();
})

app.get("/login", (req, res) => {
    res.status(201).end();
})

app.delete("/photos/:id", (req, res) => {
    res.status(201).end();
})

app.post("/photo/:id/like", (req, res) => {
    res.status(201).end();
})

app.listen(porta, () => { console.log(`Servidor rodando na porta ${porta}`) })