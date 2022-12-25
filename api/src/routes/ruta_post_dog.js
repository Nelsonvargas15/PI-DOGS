const { Router } = require("express");
const { Dog, Temperament} = require("../db.js")
const router = Router()
const {dogCreate} =require("../controllers/Dogs/create_dogs")





router.post("/", async (req, res) => {

    try {
        const objDog = req.body;
        if (!objDog) res.status(404).send("Missing info")
        const newDog = await dogCreate(objDog)
  
        res.status(201).send(newDog)
  
    } catch (error) {
        res.status(404).send(error);
    }
  })





 module.exports = router

 
 