const server = require('express').Router();
const { User, Carrito, Product, Orden } = require('../db.js');


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

// CART

server.post('/:userId/carrito', (req, res)=>{
  const id = req.params.userId  
  const productId = req.params.productId
  
  Carrito.findOrCreate({where:{ userId: id, status:'carrito' }})

  .then(product =>{
      res.status(201).send(product)
  })
  .catch(err =>{
      console.log(err)
      res.status(400).send(err)
  })

})

server.put('/product/:productId/ordencreada/:carritoId', (req, res)=>{
    const {productId, carritoId} = req.params
    const {quantity} = req.body

    Orden.update({ quantity},{where:{
    productId, carritoId
    }})
    .then(order=>{
        res.status(201).send(order)
    })
    .catch(err=>{
        console.log(err)
        res.status(400).send(err)
    })

})

server.post('/:productId/orden/:carritoId', (req, res)=>{
  const {productId, carritoId} = req.params

  Carrito.findByPk(carritoId)
  .then((carrito) =>{
      carrito.addProducts(productId) 
      .then((newOrden)=>{ 
          res.status(201).send({message: 'se agrego la orden', newOrden})
      })
  })
  .catch((err) => {
      console.log(err)
      res.status(400).send(err)
 });     
 
})


server.get('/get', (req, res)=>{
    Carrito.findAll({
        include: Product
    }, { 
        include: Orden
    })
    .then(carrito=>{
        res.status(201).send(carrito)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
})


//This will add methods getUsers, setUsers, addUsers to Project, and getProjects
//, setProjects and addProject to User.



module.exports = server;