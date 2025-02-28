const swaggerAutogen = require("swagger-autogen")();
const fs = require("fs");
const path = require("path");

// Caminho da pasta de rotas
const routesPath = path.join(__dirname, "api/routes");

// Lê todos os arquivos da pasta "routes" e adiciona no array
const routeFiles = fs
  .readdirSync(routesPath)
  .filter((file) => file.endsWith(".js"))
  .map((file) => `./api/routes/${file}`);

const doc = {
  info: {
    title: "Minha API",
    description: "Documentação gerada automaticamente",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./server.js", ...routeFiles]; // Inclui todos os arquivos da pasta routes

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Documentação gerada com sucesso!");
});