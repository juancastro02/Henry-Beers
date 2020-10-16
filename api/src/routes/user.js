const server = require('express').Router();

const { User, Carrito, Product, Orden } = require('../db.js');

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


server.put('/procesando/:carritoId' , (req,res)=> {

   const carritoId = req.params.carritoId
   
   Carrito.update({status:"procesando"},{
    where:{
           id: carritoId
        }
       })
       .then((carrito)=>{
         res.status(201).send(carrito)
       })
       .catch((err)=> {
         console.log(err)
         res.status(400).send(err)
       })
    
})




// Update queries also accept the where option, just like the read queries shown above.

// // Change everyone without a last name to "Doe"
// await User.update({ lastName: "Doe" }, {
//   where: {
//     lastName: null
//   }
// });



server.get('/:userId/carritos', (req, res)=>{
  
  const {userId} = req.params

  Carrito.findOne({
    where:{
      userId,  
      status:"carrito"
    },
    include: Product
  },{
    include: Orden,
  })

  .then(carrito =>{
    res.status(201).send(carrito)
  })
  .catch(err =>{
    res.status(400).send(err)
  })
})





//------------------------------------------------>









//This will add methods getUsers, setUsers, addUsers to Project, and getProjects
//, setProjects and addProject to User.



//Register (creación de usuario) ---> funcionando
server.post('/', async (req, res) => {
    const user = new User({
      name: req.body.name,
     username:req.body.email,
      email: req.body.email,
      password: req.body.password,
      isAdmin:req.body.isAdmin
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        isAdmin: newUser.isAdmin,
      });
    } else {
      res.status(401).send({ message: 'Información Inválida' });
    }
  });

//Delete user ---->funcionando
server.delete('/:id', (req,res)=>{    //DELETE a /users/:id
  const id = req.params.id;
	User.destroy({
		where: { id: id }
	}).then((id) => {
		res.status(200).send("Usuario " + id + " eliminado")//  Agregué status//REVISAR CONSOLOGUEO, NO ACTUALIZA ID
	}).catch(function (err) {
		console.log("delete failed with error: " + err);
		// handle error;
	});
    
});

//para traer todos los usuarios  ---->funcionando
server.get('/usuarios', (req, res, next) => { // GET a /users/usuarios
	User.findAll()
		.then(users => {
			res.status(201).send(users);
		})
		.catch(next);
});

// server.get('/usuario/:id', (req, res)=>{ // GET a /users/usuario/:id (TRAE 1 SOLO USUARIO)
//                                         TRAEMOS 1 USUARIO, PARA LUEGO UPDATEARLO
//   const {id} = req.params

//   User.findOne({where:{
//     id
//   }})
//   .then(user=>{
//     res.status(201).send(user)
//   })
//   .catch(err=>{
//     res.status(400).send(err)
//   })
// })

//Update user
//PUT /users/:id//update ---->funcionando
server.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        name: updatedUser.name,
        username: updatedUser.username,
        email: updatedUser.email,
        password:updatedUser.password,
        isAdmin: updatedUser.isAdmin,
      })
      console.log("Usuario actualizado");
      alert('Usuario actualizado');
    } else {
      res.status(404).send({ message: 'El usuario no se pudo actualizar' });
    }
  });

  //logeo sign up
  server.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signinUser) {
      res.send({
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
      });
    } else {
      res.status(401).send({ message: 'Invalid Email or Password.' });
    }
  });

// crear admin
server.post('/createadmin', async (req, res) => {
    try {
      const user = new User({
        name: 'admin',
        email: 'admin@example.com',
        password: '1234',
        isAdmin: true,
      });
      const newUser = await user.save();
      res.send(newUser);
    } catch (error) {
      res.send({ message: error.message });
    }
  });
  
module.exports = server;

