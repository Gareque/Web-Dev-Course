import express from "express";

const app = express();
const port = 3000;

function logger (req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL", req.url);
  next(); // This is essential as it moves on to the next stage.  If left out, the page/req will hang
  }

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
