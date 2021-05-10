let express = require('express');
let Controllers = require('./controllers/Controllers')
let ApiControllers = require('./controllers/ApiControllers');
let router = express.Router();

//**api**/ 
router.get("/api/serie", ApiControllers.serieList);
router.post('/api/serie/add', ApiControllers.serieNew);
router.get('/api/serie/:i', ApiControllers.serie);
router.put('/api/serie', ApiControllers.serieUpdate);
router.delete('/api/serie/delete/:i', ApiControllers.serieDelete);
router.get("/api/user/add", ApiControllers.userFormNew)
router.post('/api/serie', ApiControllers.userNew);

module.exports = router;