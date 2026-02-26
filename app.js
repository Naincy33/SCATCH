const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

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
app.set("views", path.join(__dirname, "views")); // explicitly set views folder

// ---------------- VIEW ROUTES ---------------- //

// Home Page
app.get("/", (req, res) => {
    res.render("index");
});

// Shop Page
app.get("/shop", (req, res) => {
    res.render("shop");
});

// Cart Page
app.get("/cart", (req, res) => {
    res.render("cart");
});

// Admin Page
app.get("/admin", (req, res) => {
    res.render("admin");
});

// Create Product Page
app.get("/createproducts", (req, res) => {
    res.render("createproducts");
});

// Owner Login Page
app.get("/owners/login", (req, res) => {
    res.render("owner-login");
});

// ---------------- API ROUTES ---------------- //

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