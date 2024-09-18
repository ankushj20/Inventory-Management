require('dotenv').config();  
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB:", error));

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
    }
});

userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema);
