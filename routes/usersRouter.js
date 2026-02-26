const express = require("express");
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
    res.send("Users route working 🚀");
});

// Create user
router.post("/register", (req, res) => {
    res.send("User registered ✅");
});

// Login user
router.post("/login", (req, res) => {
    res.send("User logged in 🔐");
});

// Get single user
router.get("/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

module.exports = router;