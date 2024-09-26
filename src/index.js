require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require('mongoose');

const app = express();
const server = require("http").createServer(app);
const MemoryStore = require("memorystore")(session);

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("DB CONECTED"))

app.use(
  session({
    store: new MemoryStore({ checkPeriod: 86400000 }),
    secret:
      "#@%#&^$^$%@$^$&%#$%@#$%$^%&$%^#$%@#$%#E%#%@$FEErfgr3g#%GT%536c53cc6%5%tv%4y4hrgrggrgrgf4n",
    resave: false,
    saveUninitialized: false,
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routers
app.use("/", require("./routers/main.js"));
app.use("/ejemplos", require("./routers/ejemplos.js"));

// 404 Error page
app.get("*", (req, res) => {
  res.status(404).render("partials/404", {
    title: "Error 404",
  });
});

const port = 3000;

process.on("uncaughtException", (err) => {
  console.log(err);
});

server.listen(port, async () => {
  console.log(`Server listen on port ${port}`);
});
