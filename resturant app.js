const express = require("express");
const restaurantData = require("./JSON/resturants.json");
const locationData = require("./JSON/location.json");
const mealtypeData = require("./JSON/mealtype.json");

const app = express();
const port = 8900;

app.get("/getAllRestaurants", (req, res) => {
    res.send(restaurantData);
});

app.listen(port, () => {
    console.log(`Resturants app listening on port${port}!`);
});