const express = require('express');
var app = express();
var bodyParser = require('body-parser');

let friendsArr =['Justin', 'Akram', 'Chris', 'Ron']

app.set('view engine', 'ejs')

// bodyParser doc neeto to take a look and read undestand how is the exrended true means
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.render('home')
})
app.get('/friends', (req, res) => { 
    res.render('friends', {friends: friendsArr})
})
// POST
app.post('/addfriend', (req, res) => {
    let newFriend = req.body.newfriend
    friendsArr.push(newFriend)
    res.redirect('/friends')
})


app.listen(3000, () => {
    console.log('Starting the server')
})