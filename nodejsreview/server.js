const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Persona = require("./models/persona");

connectDB();

app.use(express.json());

app.post("/personas", async (req, res) => {
  try {
    await Persona.create({
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
    });

    res.json({ msg: "Persona creada!"});
  } catch (error) {
    console.log(error);
  }
});

app.get("/personas", async (req, res) => {
  try {
    const heroes = await Persona.find({});
    res.json(heroes);
  } catch (error) {
    console.log(error);
  }
});

app.get("/personas/:personaID", async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.superheroesID);
    res.json(hero);
  } catch (error) {
    console.log(error);
  }
});

app.put("/personas/:personaID", async (req, res) => {
  try {
    await Persona.findByIdAndUpdate(req.params.superheroesID, {
      superheroename: req.body.superheroename,
      name: req.body.name,
    });
    res.json({ msg: "Persona actualizada!" });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/personas/:personaID", async (req, res) => {
  try {
    await Persona.findByIdAndDelete(req.params.superheroesID);
    res.json({ msg: "Persona eliminada!" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.json({ mss: "Hello mami" });
});

app.listen(3000, console.log("Server running on Port 3000"));
