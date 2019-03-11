const express = require('express');
const user = require('../models/user');
const app = express.Router();

app.get("/", (req, res) => {
  user.getAll((err, data) => {
    console.log(`i got ${data}`);
    if(err) throw err;
    res.send(data);
  });
})
app.post("/", (req, res) =>{
  user.add({first_name:"Steve",last_name:"Irvin",Birthday: ""}, (err, data) =>{
    res.send(data);
  })
})

module.exports = app;
