let connection = require ('../db')

class serie{
    
    constructor(idSerie,Titre, Description, userId) {
        this.idSerie = idSerie;
        this.Titre = Titre;
        this.Description = Description;
        this.userId = userId;
    }
};

module.exports = serie;