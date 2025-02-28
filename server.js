const express = require("express");
const fs = require("fs");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json"); // Arquivo gerado automaticamente
const expressListRoutes = require("express-list-routes");
const routes = require("./api/routes/index"); // Importando o index.js das rotas

const app = express();
app.use(express.json());

// // Caminho da pasta de rotas
// const routesPath = path.join(__dirname, "api/routes");

// // Lê todos os arquivos da pasta "routes" e adiciona as rotas automaticamente
// fs.readdirSync(routesPath)
//   .filter((file) => file.endsWith(".js"))
//   .forEach((file) => {
//     const route = require(`./api/routes/${file}`);
//     app.use("/", route);
//   });
routes(app);

// Liste todas as rotas
expressListRoutes(app);

// Rota para a documentação interativa
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});
