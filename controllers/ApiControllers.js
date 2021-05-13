let Users = require('../models/usersModel');
let serie = require('../models/serieModel');
let userserie = require('../models/userserieModel');
let connection = require('../db');
const { express } = require('express');

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

exports.serieUpdate = (req, res) => {
    connection.query("UPDATE serie SET description='"+req.body.description+"', titre='"+req.body.titre+"' WHERE idSerie = "+req.params.id, function(err,resultSQL){
        if (err) {
            res.status(400).json({'message' : err});
         } else{
         res.status(200).json(resultSQL);
     }
     });
 };

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

exports.userFormNew = (req, res) => {
    connection.query("INSERT INTO users (pseudo) VALUES ('"+req.body.pseudo+"')", function (err,resultSQL){
        if(err){
            res.status(400).json ({'message ' : err});
        } else {
            res.status(200).json(resultSQL);
        }
    })
};

exports.userNew = (req, res) => {
    connection.query("INSERT INTO users (pseudo) VALUES ('"+req.body.pseudo+"')", function (err,resultSQL){
        if(err){
            res.status(400).json ({'message ' : err});
        } else {
            res.status(200).json(resultSQL);
        }
    })
};

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

exports.userLike = (req, res) => {
    let usersLike = [];
    req.body.forEach(u => {
        usersLike.push([u.SerieId,u.UserId]);
    });
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
