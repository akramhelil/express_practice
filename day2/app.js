var express = require('express');
let app = express()
app.use(express.static('public'))
app.set("view engine", "ejs")
const PORT = 8000



app.get('/fallinlovewith/:thing', (req,res) => {
    let thing = req.params.thing
    
    res.render("love", {thingVar: thing})
})

app.get("/", (req, res) => {
    res.render("home")
    // res.send("<h1>Loaded<h1>")
})



app.get('/posts', (req,res) => {
    let posts = [
        {title: "Post 1", author: "Akram"},
        {title: "My cure D0gs", author: "ron"},
        {title: "Adoreable Handsome Sultan", author: "Cat"},
        {title: "I love dogs", author: "Sul"}
    ]
    res.render("posts", {posts: posts})
})


app.listen(PORT, () => {
    console.log("Server is Listening on:", PORT)
})
