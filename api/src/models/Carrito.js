const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define('carrito', {
   quantity:{
     type: DataTypes.INTEGER,
     allowNull: false
   },
   status: {
     type: DataTypes.ENUM(["carrito", "creada", "procesando", "completa", "cancelada"]),
     allowNull: false
   }
 }); 
};