const express = require("express");
const router = express.Router();

// Home Page
router.get("/", (req, res) => {
  const portfolio = [
    {
      name: "Vivero Ensenada",
      description:
        "Página web de un Vivero. Cuenta con página de inicio, catalogo, contacto, implementación de servicios de Google Maps, Whatsapp y más.",
      url: "https://viveroensenada.cl",
      img: "/img/vivero-ensenada-web.png",
    },
  ];
  res.render("main", {
    title: "Joaquín Cancino",
    portfolio,
  });
});

router.get("/manifest.json", (req, res) => {
  const manifest = require("../public/img/favicon/manifest.json");
  res.send(manifest)
});

module.exports = router;
