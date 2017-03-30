var mongoose = require("mongoose");
//POST
//Create the schema
var postSchema = new mongoose.Schema({
    title: String, 
    content: String
});

//compile the schema into a model
module.exports = mongoose.model("Post", postSchema);