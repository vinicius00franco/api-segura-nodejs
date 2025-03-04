const swaggerAutogen = require("swagger-autogen")();
const path = require("path");

const doc = {
  info: {
    title: "Minha API",
    description: "Documentação gerada automaticamente",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./server.js", "./api/routes/index.js"]; // Inclui apenas o index.js das rotas

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Documentação gerada com sucesso!");
});