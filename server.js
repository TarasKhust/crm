const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "dist");
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(publicPath, "login.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(publicPath, "contact.html"));
});

app.get("/member", (req, res) => {
  res.sendFile(path.join(publicPath, "member.html"));
});

app.get("/member/catalog/products/", (req, res) => {
  res.sendFile(path.join(publicPath, "product.html"));
});

app.listen(port, () => {
  console.log(`Hello World I run on PORT ${ port}`);
});
