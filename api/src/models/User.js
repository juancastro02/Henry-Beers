 const { DataTypes } = require('sequelize');

 module.exports = (sequelize) => {
  sequelize.define('user', {
    name: {
       type: DataTypes.STRING, 
       required: true ,
       allowNull: false
      },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      isEmail:true,
       }
     },
     password: {
        type: DataTypes.STRING,
         required: true 
      },
  
     isAdmin: {
        type: DataTypes.BOOLEAN,
         required: true,
         default: false 
        }
  }); 
 };

//  user {
//    name: "",
//    username: "",
//    email: "",
//    password:"",
//    isAdmin: false

//  }