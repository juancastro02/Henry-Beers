// // Rutas para crear usuarios
// const express = require('express');
// const server = express.Router();
// const usuarioController = require('../controllers/authController');
// const { check } = require('express-validator');

// // Crea un usuario
// // post a /users
// server.post('/', 
//     [
//         check('nombre', 'El nombre es obligatorio').not().isEmpty(),
//         check('email', 'Agrega un email válido').isEmail(),
//         check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
//     ],
//     usuarioController.crearUsuario
// );


// module.exports = server;