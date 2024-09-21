const mongoose = require("mongoose"),
  schema = new mongoose.Schema({
    productId: { type: String, required: true },
    productTitle: { type: String, required: true },
    productDescription: { type: String, required: false },
    productDate: { type: Date, required: true, default: Date.now() },
    productImages: { type: Array, required: true, default: [] },
    productPrice: { type: Number, required: true, default: 0 },
  });

module.exports = mongoose.model("Product", schema);
