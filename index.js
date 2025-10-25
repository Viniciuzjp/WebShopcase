import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import register from "./register.js";
import passport from "passport";
import LocalStrategy from "passport-local"
import session from "express-session"
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/shopcase")
  .then(console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    try {
      const user = await register.findOne({ email: email });
      if (!user) return done(null, false);
      if (user.password != password) return done(null, false);
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }));
passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
  try {
    const user = await register.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

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

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      req.session.user = user;
      return res.json(user);
    });
  })(req, res, next);
});

app.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.session.user);
    } else {
      res.json('Not authenticated');
    }
  });

app.listen(3003, () => console.log("Servidor rodando na porta 3003"));
