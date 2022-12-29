const { getApiInfo } = require("./Api_info")
const { getDbInfo } = require("./Db_info")


const getAllInfo = async () => {
    const apiInfo = await getApiInfo()
    let dbInfo = await getDbInfo()
    dbInfo = await dbInfo.map((d) => {
        return {
          id: d.dataValues.id,
          name: d.dataValues.name,
          min_height: d.dataValues.min_height,
          max_height: d.dataValues.max_height,
          min_weight: d.dataValues.min_weight,
          max_weight: d.dataValues.max_weight,
          life_span: d.dataValues.life_span,
          image: d.dataValues.image,
          createdb: d.dataValues.createdb,
          temperament: d.dataValues.Temperaments?.map( ele => ele.name ).join(", "),
          
        };
      });
     const infoTotal = apiInfo.concat(dbInfo)
    return infoTotal
}

module.exports ={
    getAllInfo
}