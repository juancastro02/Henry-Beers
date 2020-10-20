require('dotenv').config();
const server = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SIGNATURE } = process.env;

// Modelo user
const { User } = require('../db');

// Login: Normal
server.post('/login', (request, response) => {

    const { email, password } = request.body;
  
    // Buscar usuario
    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
  
        // Verifico que el usuario existe y comparo las contraseñas 
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return response.status(400).json({
            error: 'Usuario o contraseña incorrectos.'
          });
        }
  
        //Genero el token
        const token = jwt.sign({
          user: {
            id_user: user.id,
            mail: user.email,
            username: user.username,
            admin: user.isAdmin,
            password: user.password
          }
        }, SIGNATURE, { expiresIn: 60 * 60 * 24 });
  
        // Devolver el token
        return response.status(200).json({
          isAdmin: user.isAdmin,
          mensaje: 'Token generado',
          token
        });
  
      })
      .catch(error => {
        // Se rompio el servidor
        return response.status(500).json({
          error: error.message
        });
      })
  
  });


module.exports = server;