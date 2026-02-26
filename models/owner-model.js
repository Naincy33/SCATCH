const mongoose = require("mongoose");

// Connect MongoDB
/*mongoose.connect("mongodb://127.0.0.1:27017/scatch")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
*/

// Owner Schema
const ownerSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],

    picture: {
        type: String
    },

    gstin: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Owner", ownerSchema);