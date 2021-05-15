let express = require('express');
let Controllers = require('./controllers/Controllers')
let ApiControllers = require('./controllers/ApiControllers');
let router = express.Router();

//* MVC */

//**api**/ 
router.get("/api/serie", ApiControllers.serieList);
router.post('/api/serie/add', ApiControllers.serieNew);
router.get('/api/serie/:id', ApiControllers.serie);
router.put('/api/serie/:id', ApiControllers.serieUpdate);
router.delete('/api/serie/delete/:id', ApiControllers.serieDelete);
router.post("/api/user/add", ApiControllers.userFormNew)
router.post('/api/serie', ApiControllers.userNew);
router.get("/api/users", ApiControllers.userList);
router.delete('/api/user/delete/:id', ApiControllers.userDelete);
router.post('/api/userlike', ApiControllers.userLike);
router.get('/api/userlike/:id', ApiControllers.likeList);

module.exports = router;