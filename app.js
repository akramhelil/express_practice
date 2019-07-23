const express = require('express')
const app = express()

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

// excercise 
app.get('/speak/:animal', (req, res) => {
    const sounds = {
        pig: "Oink",
        cow: "Mooo",
        dog: "Woof",
        cat: "hooomeeewan",
        duck: "Quack"
    }
    let animal = req.params.animal.toLowerCase() 
    let sound = sounds[animal]
    
    res.send("The "+ animal + " says " + sound)
}) 

app.get("/repeat/:message/:times", (req,res) => {
    let message = req.params.message
    let times = parseInt(req.params.times)
    let result = ""

    for (let i = 0; i < times; i++) {
        result += message + " "
    }
    res.send(result)
})




// ORDER of the routes matters
app.get("*", (req, res) => {
    res.send("this is the star server maybe use for 404 page")
})



//  Tells express to start listening the port, nodemon installed for the autp hot load 
app.listen(8000, () => {
    console.log("Listening", 8000)
})
