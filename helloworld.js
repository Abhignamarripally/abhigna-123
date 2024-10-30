const express = require("express");
const app = express();
const port = 8900;

app.get("/", (req, res) => {
    res.send("Hello world from Express server!");
});

app.get("/home", (req, res) => {
    res.send("Home page");
});

app.get("/filter", (req, res) => {
    res.send("Filter page");
});

app.get("/details", (req, res) => {
    res.send("Details page");
});

app.listen(port, () => {
    console.log(`HelloWorld app listening on port ${port}!`);
});