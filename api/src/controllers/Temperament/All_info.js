const  axios  = require("axios")
const { Temperament } = require("../../db")
const { apikey } = process.env

const apiTemperament = async () => {

    const apiUrl = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
    const apiInfo = await apiUrl.data
    const apiTem = apiInfo.map((ele) => ele.temperament).join().split(",").sort() // une la busqueda de la appi y lo separa 
    await apiTem
        .filter((ele, i) => apiTem.indexOf(ele) === i)
        .forEach(ele => {
            ele.trim() !== "" &&
                Temperament.findOrCreate({
                    where: {
                        name: ele.trim()
                    }
                })

        });

    const temp = Temperament.findAll({
        order: ["name"]
    });
    return temp

}

module.exports = {
    apiTemperament
}