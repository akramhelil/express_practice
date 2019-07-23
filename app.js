var express = require('express')
var app = express()

// Routes 
// "/" => Hi 


app.get("/", (req,res) => {
    res.send("Hi there!")
})


// "/bye" => "Good Bye"
app.get('/bye', (req,res) => {
    res.send("Bye Take care!")
})

// "/dog"
app.get("/dog", (req,res) => {
    res.send('Woof! Woof!')
})
app.get("/cat", (req,res) => {
    res.send('nodemon test route')
})

// Route Parames 
app.get("/cat/:id/comments", (req, res) => {
    console.log(req)
    res.send('this is the paramsa route')
})

// ORDER of the routes matters
app.get("*", (req,res) => {
    res.send("this is the star server maybe use for 404 page")
})


//  Tells express to start listening the port, nodemon installed for the autp hot load 
app.listen(8000, () => {
    console.log("Listening", 8000)
})
