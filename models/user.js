var mongoose  = require("mongoose");

//USER 
//Create the schema
var userSchema = new mongoose.Schema({
    email: String, 
    name: String,
    posts: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
    ]
});

//compile schema into a model
module.exports = mongoose.model("User", userSchema);