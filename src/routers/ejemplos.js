const express = require("express");
const router = express.Router();

router.get("/plan-economico", (req, res) => {
    res.render("ejemplos/landing.ejs")
});

module.exports = router;
