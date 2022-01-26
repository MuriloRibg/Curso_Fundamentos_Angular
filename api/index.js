const express = require('express');
const app = express();
const cors = require('cors');

const porta = 3001;
const ImgController = require('./imgController');

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json(ImgController.listarImg())
})


app.listen(porta, () => { console.log(`Servidor rodando na porta ${porta}`) })