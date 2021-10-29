const express = require("express");

const app = express();

const port = 3000;


app.use((req, res, next) => {
  console.log("request");
  next();
});

app.get("/", (req, res) => {
  res.send(
    "<h1> Hello World... I Can Run Node JS Through My Web Browser </h1>"
  );
});

app.get("/home", (req, res) => {
  res.send("<h1> Hello.. This is Homepage </h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1> Hello.. This is About Page");
});

app.get("/services", (req, res) => {
  res.send("<h1> Hello.. This is Services Page </h1>");
});

app.listen(port, () => {
  console.log("server is running...!");
});
