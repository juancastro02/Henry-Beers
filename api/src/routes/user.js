const server = require('express').Router();
const { User } = require('../db.js');
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');

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
		res.status(200).send("Producto " + id + " eliminado")//  Agregué status//REVISAR CONSOLOGUEO, NO ACTUALIZA ID
	}).catch(function (err) {
		console.log("delete failed with error: " + err);
		// handle error;
	});
    
});

//para traer todos los usuarios  ---->funcionando
server.get('/usuarios', (req, res, next) => { // GET a /users/usuarios
	User.findAll({})
		.then(users => {
			res.send(users);
		})
		.catch(next);
});



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
server.get('/createadmin', async (req, res) => {
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
  
  module.exports= server;
