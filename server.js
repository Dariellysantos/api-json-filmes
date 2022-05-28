const express = require("express");
const app = require("./src/app");

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`servidor rodando lindo na porta ${PORT}`);
});
