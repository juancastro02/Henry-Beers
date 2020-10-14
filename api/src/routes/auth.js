// // Rutas para autenticar usuarios
// const express = require('express');
// const router = express.Router();
// const { check } = require('express-validator');
// const authController = require('../controllers/usuarioController');
// const auth = require('../middleware/auth');

// // Iniciar sesión
// // api/auth
// router.post('/login', 
//     authController.autenticarUsuario
// );

// // Obtiene el usuario autenticado
// router.get('/login',
//     auth,
//     authController.usuarioAutenticado
// );
// module.exports = router;