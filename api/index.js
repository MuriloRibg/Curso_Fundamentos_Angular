const express = require("express");
const app = express();
const cors = require("cors");

const porta = 3000;
const ImgController = require("./imgController");

app.use(cors());

app
  .get("/foto", (req, res) => {
    let imagem = new ImgController();
    res.status(200).json(imagem.listarImg());
  })

  .get("/foto/:id", (req, res) => {
    let imagem = new ImgController();
    const foto = imagem.listarPorId(req, res);
    res.status(200).json(foto);
  })

  .get("/photos/:id/comments", (req, res) => {
    let imagem = new ImgController();
    const comment = imagem.listarPorIdComments(req, res);
    res.status(200).json(comment);
  })

  .get("/login", (req, res) => {
    res.status(201).end();
  })

  .post("/photos/:id/comments", (req, res) => {
    res.status(201).end();
  })

  .post("/photos/upload", (req, res) => {
    res.status(201).end();
  })

  .post("/login", (req, res) => {
    res.status(201).end();
  })

  .post("/photo/:id/like", (req, res) => {
    res.status(201).end();
  })

  .delete("/photos/:id", (req, res) => {
    res.status(201).end();
  })

  .listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
  });
