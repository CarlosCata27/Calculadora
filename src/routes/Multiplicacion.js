const { Router } = require('express');
const router = Router();

const {BadRequestError,NotFoundError} =require('./exceptions');
 
router.get('/', (req, res) => {    
    try {
        const num1 = req.query.num1;
        const num2 = req.query.num2;
        var respuesta;

        if(num1 && num2){
            respuesta = parseInt(num1) * parseInt(num2);
        }
        r = {
            "resultado":respuesta.toString(2)
        }
        res.status(200).json(r);
    } catch (error) {
        if(error instanceof BadRequestError){
            res.status(400).json({error:error.message});
        }else if(error instanceof NotFoundError){
            res.status(404).json({error:error.message});
        }else{
            res.status(500).json({error:error.message});
        }
        
        

    }
})
 
module.exports = router;