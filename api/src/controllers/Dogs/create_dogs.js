const { Dog , Temperament} = require("../../db")  

const dogCreate = async (objDog) => {
  try {
      const {    name,
          min_height,
          max_height,
          min_weight,
          max_weight,
          life_span,
          image, 
          Temperaments,
          createdb 
        } = objDog;
      const dog = {
          name,
          min_height,
          max_height,
          min_weight,
          max_weight,
          life_span,
          image, 
          createdb
          
      }
  
      const temInfo = await Temperament.findAll({
          where: {
              name: Temperaments,
          }
      })
      
      const createdog = await Dog.create(dog)

      createdog.addTemperament(temInfo)

      return Dog.findAll()

  } catch (error) {
      console.log(error)
  }
}
  module.exports = {
    dogCreate
  }