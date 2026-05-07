const express = require("express");
const app = express();
const PORT = 3003;
const path = require("path");

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`TurtleSim corriendo → http://localhost:${PORT}`);
});