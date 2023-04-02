const tarifModel = require('./tarif-model');

const checkTarifId = async (req,res,next)=>{
    try {
        const tarif = await tarifModel.idIleTarifGetir(req.params.id);
        if(tarif.length !== 0){
            next()
        } else{
            res.status(404).json({message: `${req.params.id} li tarif bulunamadi`})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkTarifId
}