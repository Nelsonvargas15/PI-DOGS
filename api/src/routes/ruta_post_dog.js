const { Router } = require("express");
const { postDog } = require("../controllers/Dogs/create_dogs")
const router = Router()

router.post("/", async (req, res) => {
    try {
      const objRecipe = req.body;
      if (!objRecipe) res.status(404).send("Missing info");
      const newRecipe = await postDog(objRecipe);
  
      res.status(201).send(newRecipe);
    } catch (error) {
      res.status(404).send(error);
    }
  });


 module.exports = router

 
 