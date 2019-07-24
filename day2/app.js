var express = require('express');
let app = express()
const PORT = 8000


app.get("/", (req, res) => {
    res.render("home.ejs")
    // res.send("<h1>Loaded<h1>")
})


app.listen(PORT, () => {
    console.log("Server is Listening on:", PORT)
})