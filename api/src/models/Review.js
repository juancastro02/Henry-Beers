const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  //
   sequelize.define('review',{
   commentary: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
   calification: {
    type: DataTypes.INTEGER,
    allowNull: false,
   }
  }
  )
};