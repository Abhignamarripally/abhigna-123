const express = require("express");
const resturantData = require("./JSON/resturant.json");

const app = express();
const port = 8900;

app.get("/getAllResturants", (req, res) => {
    res.send(resturantData);
});

app.listen(port, () => {
    console.log(`resturants app listening on port${port}!`);
});