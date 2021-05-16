let express = require('express');
// Controllers NodeJs //

// Controller API// 
let ApiControllers = require('./controllers/ApiControllers');

let router = express.Router();

//* Routes des MVC */


//**Routes des API**/ 
// voir la liste des séries
router.get("/api/serie", ApiControllers.serieList);
// Ajouter une série
router.post('/api/serie/add', ApiControllers.serieNew);
router.get('/api/serie/:id', ApiControllers.serie);
// Modifier une série
router.put('/api/serie/:id', ApiControllers.serieUpdate);
// Supprimer une série
router.delete('/api/serie/delete/:id', ApiControllers.serieDelete);
// Ajouter un user
router.post("/api/user/add", ApiControllers.userFormNew)
router.post('/api/serie', ApiControllers.userNew);
// Vue des users
router.get("/api/users", ApiControllers.userList);
router.delete('/api/user/delete/:id', ApiControllers.userDelete);
// Vue des likes 
router.post('/api/userlike', ApiControllers.userLike);
router.get('/api/userlike/:id', ApiControllers.likeList);

module.exports = router;