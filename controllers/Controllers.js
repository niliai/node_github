let Users = require('../models/usersModel');
let serie = require('../models/serieModel');
let userserie = require('../models/userserieModel');
let connection = require('../db');
const { express } = require('express');

// ** Home *//
//Route vers la page d'accueil
exports.accueil = function(req, res) {
    res.render('accueil.ejs');
};

//route ajout de document
exports.add = function(req, res){
    res.render('add.ejs');
};

//Affichage des séries présentes dans le BDD
exports.serieList = (req, res) => {
    connection.query("SELECT * FROM serie", function(err,resultSQL){
        if(err) {
            console.log(err)
            res.status(400).send(err);
        }
            else{
                res.render('Home.ejs', {resultSQL});
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
            res.status(400).send(err);
        }
        res.render('Home.ejs', {resultSQL});
    });
};

// Modifier une série
exports.serieUpdate = (req, res) => {
    connection.query("UPDATE serie SET description='"+req.body.description+"', titre='"+req.body.titre+"' WHERE idSerie = "+req.params.id, function(err,resultSQL){
        if (err) {
            res.status(400).send(err);
         } else{
        res.render('Home.ejs', {resultSQL})
     }
     });
 };

// Supprimer une série
exports.serieDelete = (req, res) => {
    console.log(req.params)
    connection.query("DELETE FROM serie WHERE idserie = "+req.params.id, function(err, resultSQL) {
        if (err) {
            res.status(400).send(err);
        } 
        else {
        res.redirect('/Home');
    }
    });
};


