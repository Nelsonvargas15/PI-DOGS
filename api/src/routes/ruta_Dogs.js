const { Router } = require("express");
const { getAllInfo } = require("../controllers/Dogs/All_info")
const { Dog, Temperament } = require("../db")



const router = Router();

router.get("/", async (req, res) => {
   const name = req.query.name;
   let dogsTotal = await getAllInfo();

   try {
      if (name) {
         let dogsName = await dogsTotal.filter(ele => ele.name.toLowerCase().includes(name.toLowerCase()))
         if (dogsName.length) {
            res.status(200).send(dogsName)
         } else {
            throw new Error("lo siento , el perro no esta ")
         }
      } else {
         res.status(200).send(dogsTotal)
      }
   } catch (error) {
      res.status(400).send(error.message)
   }
});

router.get("/:id", async (req, res) => {
   const id = req.params.id
   try {
      const dogId = await getAllInfo()
      if (id) {
         const filterDogById = await dogId.filter(dog => dog.id == id)
         console.log(filterDogById)
         if (filterDogById.length) {
            res.status(200).send(filterDogById)
         }
         else {
            throw ("no existe el perro")
         }
      }
   }
   catch (error) {
      res.status(404).send(error)
   }
})






module.exports = router;