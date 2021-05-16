let Users = require('../models/usersModel');
let serie = require('../models/serieModel');
let userserie = require('../models/userserieModel');
let connection = require('../db');
const { express } = require('express');

//Affichage des séries présentes dans le BDD
exports.serieList = (req, res) => {
    connection.query("SELECT * FROM serie", function(err,resultSQL){
        if(err) {
            console.log(err)
            res.status(400).json({'message' : err});
        }
            else{
                res.status(200).json(resultSQL);
            }
        });
};
//Affichage des séries présentes dans le BDD
exports.serieFormNew = (req, res) => {
    connection.query("SELECT * FROM serie", function(err,resultSQL){
        if(err) {
            res.status(400).json({'message' : err});
        }
            else{
                res.status(200).json(resultSQL)
            }
        });
};

//Ajout d'une série
exports.serieNew = (req, res) => {
    let serie = {"Titre": req.body.titre, "Description": req.body.description};
    console.log(serie)
    connection.query("INSERT INTO serie SET ?", serie, function(err, resultSQL) {
        if (err) { 
            console.log(err);
            res.status(400).json({'message': err});
        }
            res.status(200).json(resultSQL);
    });
};

// Ajout d'une série via le formulaire
exports.serieFormUpdate = (req, res) => {
    let idSerie = req.params.idSerie;
    connection.query("INSERT INTO serie (titre, descriptions) VALUES ('"+req.body.titre+"', '"+req.body.description+"')", function (err,resultSQL){
        if(err){
            res.status(400).json ({'message ' : err});
        } else {
            res.status(200).json(resultSQL);
        }
    })
};
// Modifier une série
exports.serieUpdate = (req, res) => {
    connection.query("UPDATE serie SET description='"+req.body.description+"', titre='"+req.body.titre+"' WHERE idSerie = "+req.params.id, function(err,resultSQL){
        if (err) {
            res.status(400).json({'message' : err});
         } else{
         res.status(200).json(resultSQL);
     }
     });
 };

// Supprimer une série
exports.serieDelete = (req, res) => {
    console.log(req.params)
    connection.query("DELETE FROM serie WHERE idserie = "+req.params.id, function(err, resultSQL) {
        if (err) {
           res.status(400).json({'message' : err});
        } else{
        res.status(200).json(resultSQL);
    }
    });
};

// Ajout d'un utilisateur via le formulaire
exports.userFormNew = (req, res) => {
    connection.query("INSERT INTO users (pseudo) VALUES ('"+req.body.pseudo+"')", function (err,resultSQL){
        if(err){
            res.status(400).json ({'message ' : err});
        } else {
            res.status(200).json(resultSQL);
        }
    })
};
// Ajout d'un nouvel utilisateur
exports.userNew = (req, res) => {
    connection.query("INSERT INTO users (pseudo) VALUES ('"+req.body.pseudo+"')", function (err,resultSQL){
        if(err){
            res.status(400).json ({'message ' : err});
        } else {
            res.status(200).json(resultSQL);
        }
    })
};

// connection entre les séries et les likeurs
exports.serie = (req, res) => {

    connection.query("SELECT * FROM serie WHERE  idserie = "+req.params.id, function (err,resultSQL){
        if(err){
            res.status(400).json ({'message ' : err});
        } else {
            res.status(200).json(resultSQL);
        }
    })
};

exports.userList = (req, res) => {
    connection.query("SELECT * FROM users", function(err,resultSQL){
        if(err) {
            console.log(err)
            res.status(400).json({'message' : err});
        }
            else{
                res.status(200).json(resultSQL);
            }
        });
};

// Supprimer un utilisateur
exports.userDelete = (req, res) => {
    console.log(req.params)
    connection.query("DELETE FROM users WHERE idUser = "+req.params.id, function(err, resultSQL) {
        if (err) {
           res.status(400).json({'message' : err});
        } else{
        res.status(200).json(resultSQL);
    }
    });
};

// Ajout de la liaison série/likeur
exports.userLike = (req, res) => {
    let usersLike = [];
    req.body.forEach(u => {
        usersLike.push([u.SerieId,u.UserId]);
    });
    connection.query("DELETE from userserie where Serieid = "+req.body[0].SerieId)
    let sqlStatement = "INSERT INTO userserie(SerieId,UserId) VALUES ? ;";
    connection.query(sqlStatement,[usersLike],function(error, resultSQL){
        if(error){
            res.status(400).json({'message' : error});
        }
        else{
            res.status(200).json(resultSQL);

        }

    }); 
    };

    exports.likeList = (req, res) => {
        let idSerie = req.params.id;

        connection.query("SELECT u.* FROM users u INNER JOIN userserie s ON u.idUser = s.UserId WHERE s.SerieId = ?;", idSerie, function(error, resultSQL){
            if(error){
                res.status(400).json({'message' : error});
            }
            else{
                res.status(200).json(resultSQL);
            }
    
        }); 
    };