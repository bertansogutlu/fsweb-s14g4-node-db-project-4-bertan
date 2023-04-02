const router = require('express').Router();
const middleware = require('./tarif-middleware');
const tarifModel = require('./tarif-model');

router.get('/:id',middleware.checkTarifId, async (req,res,next)=>{
    try {
        const tarif = await tarifModel.idIleTarifGetir(req.params.id)
        res.json(tarif)
    } catch (error) {
        next(error)
    }
});

module.exports = router;