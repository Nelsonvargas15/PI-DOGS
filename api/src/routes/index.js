const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require("./ruta_Dogs")
const temperaments = require("./ruta_temperaments")
const post = require("./ruta_post_dog")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogs)
router.use("/temperaments" , temperaments)
router.use ("/dogs" , post)


module.exports = router;
