const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const enableHotReload = require("./hot-reload");

var exemploController = require("./controllers/exemplo");
var produtoController = require("./controllers/produto");

const app = express();

// configurando o body-parser
app.use(bodyparser.urlencoded({ extended: false}));

// Configurações do seu app Express

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública

app.use(express.static(path.join(__dirname, "public")));
console.log("Static files path set to:", path.join(__dirname, "public"));

// Habilitar hot-reload

enableHotReload(app);

// Rotas

app.get("/", exemploController.mostraTelaDeExemplo);

app.get("/produto", produtoController.mostrarTela);
app.post("/adicionar-produto", produtoController.adicionarProduto);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);});