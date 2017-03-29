var mongoose  = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


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
    posts: [postSchema]
});

//compile schema into a model
var User = mongoose.model("User", userSchema);





var newUser = new User({
    email: "hermione@hogwarts.edu", 
    name: "Hermione Granger"
}); 

// newUser.posts.push({
//     title: "How to brew polyjuice potions", 
//     content: "Just kidding, go to potions class to learn it"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err); 
//     }else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples", 
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });


User.findOne({name: "Hermione Granger"}, function (err, user){
    if (err){
        console.log(err);
    }else{
        user.posts.push({
            title: "3 things I really hate", 
            content: "Voldemort, Voldemort, Voldemort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        });
    }
});