const { Router } = require('express');
const router = Router();

router.get('/cotizacion', (req, res) => {
    
    res.json({ "title": "Hello World" });
        
});

module.exports = router;