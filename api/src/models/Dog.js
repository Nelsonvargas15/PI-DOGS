const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: true,
    },
    
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    max_height :{
      type :DataTypes.STRING,   
      allowNull :false ,  
      defaultValue: 2     
    },

    min_height :{
      type :DataTypes.STRING,   
      allowNull :false ,   
      defaultValue: 2    
    },
    max_weigth :{
      type: DataTypes.STRING,
      allowNull :false ,
      defaultValue: 2
      

    },

    min_weigth :{
      type: DataTypes.STRING,
      allowNull :false ,
      defaultValue: 2
      

    },

       life_Span:{
      type: DataTypes.STRING,
      allowNull : true,

    },

    image: {
      type: DataTypes.STRING,
      allowNull: true
    },

   createdb :{
    type :  DataTypes.BOOLEAN , // para confitmar si el perro se creo corretamente en la base de datos 
    allowNull: true ,         // no pude ser vacio
    defaultValue : true, 

   },

  });
};
