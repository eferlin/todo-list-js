const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")));
// ROTA
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () =>
  console.log(`Servidor rodando em HTTP://localhost:${port}`)
);
