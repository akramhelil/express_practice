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



app.listen(PORT, () => {
    console.log("Server is Listening on:", PORT)
})
