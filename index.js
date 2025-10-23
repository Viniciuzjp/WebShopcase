import express from "express";
import cors from "cors";
import produtos from "./produtos.js";
import UserSchema from "./register.js";
import mongoose from "mongoose";
import register from "./register.js";
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/shopcase")
  .then(console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});
app.post("/register", (req, res) => {
  if (!req.body.name) {
    return res.json("O campo nome precisa estar preenchido");
  }
  if (!req.body.email) {
    return res.json("O campo email precisa estar preenchido");
  }
  if (!req.body.password) {
    return res.json("O campo senha precisa estar preenchido");
  } else if (req.body.password != req.body.password2) {
    return res.json("Passwords do not match");
  } else if (req.body.password.lenght < 6) {
    return res.json("A senha precisa conter no minimo 6 digitos");
  }
  register.find({ email: req.body.email }).then((data) => {
    if (data.length > 0) {
      return res.json("usuario já registrado com este email");
    } else {
      const Register = new register(req.body);
      Register.save()
        .then((register) => res.json(register))
        .catch((err) => res.json(err, "Something went wrong"));
    }
  });
});

app.listen(3003, () => console.log("Servidor rodando na porta 3003"));
