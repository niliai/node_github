let connection = require ('../db')

class Users{

    constructor(idUser, pseudo) {
        this.idUser = idUser;
        this.pseudo = pseudo;
    }
};

module.exports = Users;