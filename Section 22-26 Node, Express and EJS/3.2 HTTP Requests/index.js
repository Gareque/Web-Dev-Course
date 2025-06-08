import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>grigeral@gmail.com</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>I am a rookie developer.</h1>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


// Request Vocabulary:
//
// GET - Request resource
// POST - Sending resource
// PUT - Replace resource (replace entire resource)
// PATCH - Patch up a resource (fix a part of it)
// DELETE - Delete a resource