const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "message": "pong"
        }
    );
})
 
module.exports = router;