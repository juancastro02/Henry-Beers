const server = require('express').Router();
const { User } = require('../db.js');


server.post('/', (req, res)=>{
    const {username, email} = req.body
    User.findOrCreate({where: {
        username, email
    }})  
    .then(user=>{
        res.status(201).send(user)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
})



module.exports = server;