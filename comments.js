// create a web server

const express = require("express");
const app = express();
const path = require("path");

const comments = [];
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.post("/comments", (req, res) => {
  comments.push(req.body);
  res.json(comments);
});

app.listen(3000);
console.log("Server is running on port 3000");
//