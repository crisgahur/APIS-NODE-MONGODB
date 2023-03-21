const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Hero = require("./models/heroModel");

connectDB();

app.use(express.json());

app.get("/superheroes", async (req, res) => {
  try {
    const heroes = await Hero.find({});
    res.json(heroes);
  } catch (error) {
    console.log(error);
  }
});

app.get("/superheroes/:superheroesID", async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.superheroesID);
    res.json(hero);
  } catch (error) {
    console.log(error);
  }
});

app.post("/superheroes", async (req, res) => {
  try {
    await Hero.create({
      superheroename: req.body.superheroename,
      name: req.body.name,
    });

    res.json({ msg: "Superheroe created!" });
  } catch (error) {
    console.log(error);
  }
});

app.put("/superheroes/:superheroesID", async (req, res) => {
  try {
    await Hero.findByIdAndUpdate(req.params.superheroesID, {
      superheroename: req.body.superheroename,
      name: req.body.name,
    });
    res.json({ msg: "Superheroe updated!" });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/superheroes/:superheroesID", async (req, res) => {
  try {
    await Hero.findByIdAndDelete(req.params.superheroesID);
    res.json({ msg: "Superheroe deleted!" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.json({ mss: "Hello mami" });
});

app.listen(3000, console.log("Server running on Port 3000"));
