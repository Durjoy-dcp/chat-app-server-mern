var express = require("express");
var cors = require("cors");
var app = express();
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
require("dotenv").config();
connectDB();
const port = process.env.PORT || 4000;
app.use(cors());

app.use("api/user/", userRouter);
