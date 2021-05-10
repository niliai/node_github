let connection = require ('../db')

class userserie{
    constructor(SerieId, userid) {
        this.SerieId = SerieId;
        this.userid = userid;
    }
};

module.exports = userserie;