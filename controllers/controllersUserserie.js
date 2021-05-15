let userserie = require('../models/userserieModel');
let connection = require('../db');
const { express } = require('express');

// connection entre les séries et les likeurs
exports.serie = (req, res) => {
    connection.query("SELECT * FROM serie WHERE  idserie = "+req.params.id, function (err,resultSQL){
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200);
            res.render('Home.ejs')
        }
    })
};

exports.userList = (req, res) => {
    connection.query("SELECT * FROM users", function(err,resultSQL){
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200);
            res.render('Home.ejs')
            }
        });
};

// Ajout de la liaison série/likeur
exports.userLike = (req, res) => {
    let usersLike = [];
    req.body.forEach(u => {
        usersLike.push([u.SerieId,u.UserId]);
    });
    let sqlStatement = "INSERT INTO userserie(SerieId,UserId) VALUES ? ;";
    connection.query(sqlStatement,[usersLike],function(error, resultSQL){
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200);
            res.render('Home.ejs')

        }

    }); 
    };

    exports.likeList = (req, res) => {
        let idSerie = req.params.id;

        connection.query("SELECT u.* FROM users u INNER JOIN userserie s ON u.idUser = s.UserId WHERE s.SerieId = ?;", idSerie, function(error, resultSQL){
            if(err){
                res.status(400).send(err);
            } else {
                res.status(200);
                res.render('Home.ejs')
            }
    
        }); 
    };
