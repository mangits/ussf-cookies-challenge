const express = require('express')
const app = express()
const port = 5000
const cookieParser = require('cookie-parser')

app.listen(port, ()=>{
  console.log(`Listening on localhost:${port}`)
})

app.use(cookieParser())

app.get('/login', (req, res)=>{
  let username = req.query.name
  if (username) {
    res.cookie('name', username)
    res.send(`Set cookie for ${username}`)
  } else {
    res.send('Set a username with ?name=')
  }
})

app.get('/hello', (req, res) => {
  console.log(req.cookies);
  (req.cookies) ? res.send(`Welcome back ${req.cookies.name}!`)
  : res.send('Please login!')
})