const mongoose = require("mongoose");
const plm = require("passport-local-mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/InventoryManagement")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: { 
        type: String,
        required: true 
    },
    // password: { 
    //     type: String,
    //     required: true
    //  }
});

userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema);