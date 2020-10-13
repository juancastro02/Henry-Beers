const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define('carrito', {
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   price: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
   quantity:{
     type: DataTypes.INTEGER,
     allowNull: false
   },
   status: {
     type: DataTypes.ENUM(["carrito", "creada", "procesando", "completa", "cancelada"]),
     allowNull: false
   },
   order: {
       type: DataTypes.INTEGER,
       defaultValue: 0
   }
 }); 
};