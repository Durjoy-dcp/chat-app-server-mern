var express = require("express");
var cors = require("cors");
var app = express();
const { chats } = require("./data/data");
require("dotenv").config();
const port = process.env.PORT || 4000;
app.use(cors());
app.get("/server", (req, res) => res.send(chats));
app.get("/api/chat/:id", (req, res) => {
  res.send(chats.find((chat) => chat._id == req.params.id));
});

app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
