const server = require('express').Router();
const { Category } = require('../db.js');

server.post('/create', (req, res)=>{
    const {name, description} = req.body
    Category.findOrCreate({where:{name, description}})
    .then(()=>{
        res.status(201).send('Categoria agregada exitosamente')
    })
    .catch(err=>{
        res.status(400).json(err)
    })
})


module.exports = server