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
            res.status(200).json({'message': 'Merci pour ton ajout{'});
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
    connection.query("UPDATE serie SET description='"+req.body.description+"' WHERE idSerie = "+req.params.id, function(err,resultSQL){
        if (err) {
            res.statuts(400).json({'message' : err});
         } else{
         res.status(200).json(resultSQL);
     }
     });
 };

exports.serieDelete = (req, res) => {
    connection.query("DELETE FROM serie WHERE idserie = ?"+req.params.id, function(err, resultSQL) {
        if (err) {
           res.statuts(400).json({'message' : err});
        } else{
        res.status(200).json(resultSQL);
    }
    });
};

exports.userFormNew = (req, res) => {
    connection.query("INSERT INTO user (pseudo, idUser) VALUES ('"+req.body.pseudo+"', '"+req.body.idUser+"')", function (err,resultSQL){
        if(err){
            res.status(400).json ({'message ' : err});
        } else {
            res.status(200).json(resultSQL);
        }
    })
};

exports.userNew = (req, res) => {
    connection.query("INSERT INTO user (pseudo, idUser) VALUES ('"+req.body.pseudo+"', '"+req.body.idUser+"')", function (err,resultSQL){
        if(err){
            res.status(400).json ({'message ' : err});
        } else {
            res.status(200).json(resultSQL);
        }
    })
};

exports.serie = (req, res) => {

    connection.query("INSERT INTO user (pseudo, idUser) VALUES ('"+req.body.pseudo+"', '"+req.body.idUser+"')", function (err,resultSQL){
        if(err){
            res.status(400).json ({'message ' : err});
        } else {
            res.status(200).json(resultSQL);
        }
    })
};