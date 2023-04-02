const tarifModel = require('./tarif-model');

const checkTarifId = async (req,res,next)=>{
    try {
        const isExist = await tarifModel.idIleTarifGetir(req.params.id);
        if(isExist.length === 0){
            res.status(404).json({message: `${req.params.id} li tarif bulunamadi`})
        } else{
            req.tarif = isExist;
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkTarifId
}