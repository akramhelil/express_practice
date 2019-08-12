const express = require('express');
var app = express();

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('home')
})
app.get('/friends', (req, res) => {
    let friendsArr =['Justin', 'Akram', 'Chris', 'Ron']
    res.render('friends', {friends: friendsArr})
})
// POST
app.post('/addfriend', (req,res) => {
    res.send('You have reached the Post Route')
})


app.listen(3000, () => {
    console.log('Starting the server')
})