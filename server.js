const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "dist");
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/user", (req, res) => {
  res.sendFile(path.join(publicPath, "user.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(publicPath, "contact.html"));
});

app.listen(port, () => {
  console.log(`Hello World I run on PORT ${ port}`);
});
