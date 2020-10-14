const server = require('express').Router();



//acomodar a lo nuestro
server.post('/login', (req, res) => {
    let { email, password } = req.body;
    UserRepository.login(email, password)
      .then(logged => {
        if(logged) { // login correcto
          res.session.user = { email };
          res.jsonp({ success: true });
        } else {
          res.jsonp({
            success: false,
            message: 'Email o contraseña incorrecta'
          });
        }
  });