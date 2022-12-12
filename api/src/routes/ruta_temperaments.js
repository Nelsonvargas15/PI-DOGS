const { Router } = require("express");
const { apiTemperament } = require("../controllers/Temperament/All_info")

const router = Router()

router.get ("/", async (req , res ) => {
  
    try {
        const dtTemperaments =  await apiTemperament() 
        res.status(200).send(dtTemperaments)
        
    } catch (error) {
        res.status(400).send({error: error.message})
    }


})

module.exports = router