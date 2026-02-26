const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

const dbURI = `${config.get("MONGODB_URI")}/scatch`;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        debug("MongoDB Connected ✅");
    } catch (err) {
        debug("MongoDB Error ❌");
        debug(err);
        process.exit(1);
    }
};

module.exports = connectDB;