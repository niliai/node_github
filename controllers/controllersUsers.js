let Users = require('../models/usersModel');
let connection = require('../db');
const { express } = require('express');

// Ajout d'un utilisateur
    // Formulaire d'ajout des users
exports.userFormNew = (req, res) => {
    res.render('Login.ejs')
    };
    // Ajout d'un utilisateur
    exports.userNew = (req, res) => {
    connection.query("INSERT INTO users (pseudo) VALUES ('"+req.body.pseudo+"')", function (err,resultSQL){
        if(err){
            res.status(400).send(err);
        } else {
            res.status(201).redirect('/Home');
        }
    })
};

// Supprimer un utilisateur
exports.userDelete = (req, res) => {
    connection.query("DELETE FROM users WHERE idUser = "+req.params.id, function(err, resultSQL) {
        if (err) {
           res.status(400).send(err);
        } else{
        res.redirect('/Home');
    }
    });
};