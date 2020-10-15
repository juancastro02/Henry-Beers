const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define('carrito', {
   status: {
     type: DataTypes.ENUM(["carrito", "creada", "procesando", "completa", "cancelada"]),
     allowNull: false
   }
 }); 
};