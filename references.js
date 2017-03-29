var mongoose  = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");


//POST
//Create the schema
var postSchema = new mongoose.Schema({
    title: String, 
    content: String
});

//compile the schema into a model
var Post = mongoose.model("Post", postSchema);



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
var User = mongoose.model("User", userSchema);

// Create a post
// Find a user 
// Push this new post into the user’s posts array 
// Save the user’s new info
// Print out the data
Post.create({
    title: "How to cook the best burger part 2",
    content: "blah blah"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        }else{
            //add the post into the user's posts
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });
        }
    });
});
// User.create({
//     email: "bob@gmail.com", 
//     name: "Bob Belcher"
// });



