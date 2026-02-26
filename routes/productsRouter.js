const express = require("express");
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
    res.send("Hey it's working 🚀 Products route");
});

// Example: Create product (POST)
router.post("/create", (req, res) => {
    res.send("Product Created ✅");
});

// Example: Get single product
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Product ID: ${id}`);
});

module.exports = router;