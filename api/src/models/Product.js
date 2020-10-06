const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categorias: {
      type: DataTypes.NUMBER,
      validate: {
        notEmpty: true
      }
    },
    // incorporar imagen
    attribute: 'picture', 
    mimetype: /^image/,
    crop: true,
    sizes: {
     small: 64, //width 64
     big: 150, //width 150
   },
  });
};
