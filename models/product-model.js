const mongoose = require("mongoose");

// Product Schema
const productSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true
    },

    discount: {
        type: Number,
        default: 0
    },

    bgColor: {
        type: String,
        default: "#ffffff"
    },

    panelColor: {
        type: String,
        default: "#000000"
    },

    textColor: {
        type: String,
        default: "#000000"
    }

}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);