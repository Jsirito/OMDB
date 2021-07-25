const express = require("express");
const app = express();
const volleyball = require("volleyball");
const db = require("./config/db");
const router = require("./routes/");
const cors = require("cors");
const { urlencoded } = require("express");
var cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const User = require("./models/Users");

app.use(volleyball);
app.use(cors());

app.use(express.json());
app.use(urlencoded({ extended: true }));
//sirver los archivos estaticos a express
app.use(express.static("./public"));

/* COOKIES */
//una propiedad de los headers del request
//necesitarás un parser que la transforme de string a un objeto
// popula req.cookie
app.use(cookieParser());

/* SESSIONS */
// inicializar las sesiones
//es un gestor de sesiones para integrar a la autenticación
// popula req.session
app.use(
  sessions({
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true,
  })
);

// usa el método initialize para ponerlo en marcha passport
app.use(passport.initialize());
// vinculá la instancia de Passport con las sesiones configuradas en Express
app.use(passport.session());

/* LOCALSTRATEGY */
//usa localStrategy para decidir si las credenciales son válidas corre por tu cuenta
passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      // Buscá el usuario por el parametro email
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            // email not found
            return done(null, false);
          }
          // Valida la contraseña usando el método de instancia agregado al modelo Users.
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

/* SERIALIZE AND DESERIALIZE */
// conectar passport con las sesiones configuradas en Express
//Indica a passport que guardar en la session y como obtener la info
// How we save the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// How we look for the user
passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

// Express
app.use("/api", router);

const PORT = 3001;

db.sync({ force: false }).then(() => {
  console.log("DB CONECTED");

  app.listen(PORT, () => {
    console.log(`Server listening on http://locahost:${PORT}`);
  });
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public", "index.html"));
// });
