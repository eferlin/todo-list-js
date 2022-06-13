const express = require("express");
const path = require("path");
const routes = require("./routes/routes");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(3000, () =>
  console.log(`Servidor rodando em HTTP://localhost:${port}`)
);
