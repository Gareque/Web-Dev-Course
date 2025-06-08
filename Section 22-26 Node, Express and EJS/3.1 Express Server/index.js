import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
})

// activate server: run node .\index.js
// to listen on wsl: sudo lsof -i -P -n | grep LISTEN