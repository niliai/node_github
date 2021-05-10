let express = require('express');
let app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Résolution API
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

let sql = require ('./db.js');

router = require('./routes');
app.use('/', router);

let port = 5000;
app.listen(port, function() {
    console.log('Server running on port ' + port);
})