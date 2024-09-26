const express = require("express");
const router = express.Router();
const packages = require("../utils/planes.js");
const habilidades = require("../utils/habilidades.js");

// Home Page
router.get("/", (req, res) => {
  const portfolio = [
    {
      name: "Proyecto Vivero Ensenada",
      description:
        "Página web de un Vivero. Cuenta con página de inicio, catalogo, contacto, implementación de servicios de Google Maps, Whatsapp y más.",
      url: "https://viveroensenada.cl",
      img: "/img/portfolio/mockup-viveroensenada.webp",
    }
  ];


  res.render("main", {
    title: "Joaquín Cancino",
    portfolio,
    packages,
    habilidades
  });
});

router.get("/manifest.json", (req, res) => {
  const manifest = require("../public/img/favicon/manifest.json");
  res.send(manifest);
});

module.exports = router;
