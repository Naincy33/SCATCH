const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/scatch")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    cart: {
        type: Array,
        default: []
    },

    isadmin: {
        type: Boolean,
        default: false
    },

    orders: {
        type: Array,
        default: []
    },

    contact: {
        type: Number
    },

    picture: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);