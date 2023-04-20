const { Router } = require('express');
const router = Router();
 
router.get('/', (req, res) => {    
    try {
        const num1 = req.query.num1;
        const num2 = req.query.num2;
        var respuesta;

        if(num1 && num2){
            respuesta = parseInt(num1) - parseInt(num2);
        }
        r = {
            "resultado":respuesta.toString(2)
        }
        res.status(200).json(r);
    } catch (error) {
        res.status(400).json(error);
        console.log(error);

    }
})
 
module.exports = router;