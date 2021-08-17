const express = require("express");
const formidale = require("express-formidable");
const cors = require("cors");
require("dotenv").config();
const qs = require("qs");

const app = express();
const marvelRoutes = require("./routes/marvel");

app.use(formidale());
app.use(cors());
app.use(marvelRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur le serveur Marvel" });
});

app.all("*", (req, res) => {
  res.status(400).json({ message: "Page not found " });
});

app.listen(process.env.PORT || "4000", () => {
  console.log("Server is started");
});
