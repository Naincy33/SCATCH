const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

// DB Connection
const connectDB = require("./config/mongoose-connection");
connectDB();

// Routers
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");

// Base Route
app.get("/", (req, res) => {
    res.send("Server Running 🚀");
});

// Routes
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// 404 Handler
app.use((req, res) => {
    res.status(404).send("Page Not Found ❌");
});

// Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});