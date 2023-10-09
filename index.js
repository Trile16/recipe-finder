const express = require("express");
const apiRouter = require("./api");
require("dotenv").config();

const app = express();
const path = require("path");

const homePage = path.join(__dirname, "index.html");
app.get("/", (req, res) => res.sendFile(homePage));

app.use("/api", apiRouter);

const reactApp = path.join(__dirname, "dist/main.js");
app.get("/dist/main.js", (req, res) => res.sendFile(reactApp));

const reactSourceMap = path.join(__dirname, "dist/main.js.map");
app.get("/dist/main.js.map", (req, res) => res.sendFile(reactSourceMap));

const styleSheet = path.join(__dirname, "styles.css");
app.get("/styles.css", (req, res) => res.sendFile(styleSheet));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
