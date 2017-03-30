var mongoose  = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");


var Post = require("./models/post.js");
var User = require("./models/user.js");




// Create a post
// Find a user 
// Push this new post into the user’s posts array 
// Save the user’s new info
// Print out the data
Post.create({
    title: "How to cook the best burger part 4",
    content: "content for part 4"
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


//Find user 

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(user);
//   }
// });
//Find all posts for that user 


