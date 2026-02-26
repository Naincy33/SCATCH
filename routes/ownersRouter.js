const express = require("express");
const router = express.Router();

// 👇 Development Only Route
if (process.env.NODE_ENV === "development") {

    router.post("/create", async function (req, res) {
        try {

            // Check if owner already exists
            let owners = await ownerModel.find();

            if (owners.length > 0) {
                return res
                    .status(503)
                    .send("You don't have permission to create a new owner.");
            }

            // Get data from body
            let { fullname, email, password } = req.body;

            // Create owner
            let createdOwner = await ownerModel.create({
                fullname,
                email,
                password
            });

            res.status(201).json({
                message: "Owner created successfully ✅",
                owner: createdOwner
            });

        } catch (err) {
            res.status(500).send("Something went wrong ❌");
        }
    });

}

// GET all owners
router.get("/", (req, res) => {
    res.send("Owners route working 🚀");
});


// Create owner
router.post("/create", (req, res) => {
    res.send("Owner created ✅");
});

// Get single owner by ID
router.get("/:id", (req, res) => {
    res.send(`Owner ID: ${req.params.id}`);
});


module.exports = router;