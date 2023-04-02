const router = require('express').Router();
const middleware = require('./tarif-middleware');

router.get('/:id',middleware.checkTarifId,(req,res,next)=>{
    try {
        res.json(req.tarif)
    } catch (error) {
        next(error)
    }
});

module.exports = router;