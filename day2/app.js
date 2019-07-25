var express = require('express');
let app = express()
const PORT = 8000


app.get("/", (req, res) => {
    res.render("home.ejs")
    // res.send("<h1>Loaded<h1>")
})

app.get('/fallinlovewith/:thing', (req,res) => {
    let thing = req.params.thing
  
    res.render("love.ejs", {thingVar: thing})
})

app.get('/posts', (req,res) => {
    let posts = [
        {title: "Post 1", author: "Akram"},
        {title: "My cure D0gs", author: "ron"},
        {title: "Adoreable Handsome Sultan", author: "Cat"},
        {title: "I love dogs", author: "Sul"}
    ]
    res.render("posts.ejs", {posts: posts})
})


app.listen(PORT, () => {
    console.log("Server is Listening on:", PORT)
})
