const express = require("express");
const star = require("../controllers/starwarcontrollers")
const app = express();

app.use(express.json())



app.get("/star", star.index);

app.post("/addstar", star.store);

app.patch("/star/:id", star.upda);

app.delete("/stardel/:id", star.dele);

module.exports = app;