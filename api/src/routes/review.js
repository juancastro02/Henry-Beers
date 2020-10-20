const server = require('express').Router();
const { Sequelize } = require('sequelize');
const { User, Product, Review } = require('../db.js');


//////////ruta para agregar una review

server.post('/product/:idProd/user/:idUser', (req, res) => {
       const {idProd, idUser} = req.params
     Product.findByPk(idProd)
     .then((product) =>{
      product.addUsers(idUser) 
      .then((newReview)=>{ 
          res.status(201).send({message: 'se agrego la review', newReview})

      })

     .catch((err) => {
      console.log(err)
      res.status(400).json(err)
     })
  })
        .catch((err)=>{
          console.log(err)
            res.status(400).json(err)
          
         })
        })

        //////ruta para modificar una review

server.put('/product/:idProd/user/:idUser', (req, res) => {
       const {idProd, idUser} = req.params
       const {commentary, calification} = req.body

       Review.update({calification, commentary}, {
            where: {
                productId: idProd, 
                userId: idUser
            }
       })   .then((reviewMod)=>{
        res.status(201).send(reviewMod)
      })
      .catch((err)=> {
        console.log(err)
        res.status(400).send(err)
      })
   


})

///////ruta para traer todas las reviews

server.get('/product/:idProd', (req, res)=>{ 
 
  const idProd = req.params.idProd

 Product.findAll({ 
   where: {
     id: idProd,
 },
     include: User 
 }, { 
     include: Review
 })
 .then((products)=>{
     res.status(201).send(products)
 })
 .catch((err)=>{
  console.log(err)
    res.status(400).json(err)
}) 

})
 


module.exports = server;