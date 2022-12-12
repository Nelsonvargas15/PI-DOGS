const { Dog , Temperament} = require("../../db")  

const postDog = async (objDog) => {
    try {
      const { name, min_height , max_height , min_weight, max_weight, life_span, image, temperament, createdInDb,} = objDog
      const Dogs = {
        name,
        min_height,
        max_height,
        min_weight,
        max_weight,
        life_span,
        image,
        temperament,
        createdInDb,
      };
  
      const tempDt = await Temperament.findAll({
        where: {
          name: temperament,
        },
      });
      const createDog = await Dog.create(Dogs);
  
     createDog.addTemperament(tempDt);
  
      return Dog.findAll();
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = {
    postDog
  }