import express from "express";
import cors from "cors";
import produtos from "./produtos.js";
const app = express()


app.use(cors())

app.get("/api/produtos", (req, res) => {
    res.send(produtos)
})

app.get("/api/produtos/:id", (req, res) => {
  const id = req.params.id;
  const produto = produtos.find(p => p.productId === id);

  if (!produto) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  res.json(produto);
});


app.listen(3003, () => console.log("Servidor rodando na porta 3003"));