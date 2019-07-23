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

app.listen(8000, () => {
    console.log("Listening", 8000)
})
