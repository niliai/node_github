use series;

CREATE TABLE users(
    idUser int UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
    pseudo VARCHAR(45) NOT NULL,
    type INT NOT NULL
);

INSERT INTO users VALUES(1, "admin" ,1);
INSERT INTO users VALUES(2, "visitor" ,2);

CREATE table serie (
    idSerie int UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
    Titre VARCHAR(55) NOT NULL,
    Description VARCHAR(255) NOT NULL
);

INSERT INTO serie VALUES(1, "This is Us" , "Histoire marrante");
INSERT INTO serie VALUES(2, "visitor" ,2);


CREATE table userserie(
    Serieid int UNSIGNED,
    Userid int unsigned,
    idus int,

    FOREIGN KEY (SerieId) REFERENCES SERIE(idSerie),
    FOREIGN KEY (UserId) REFERENCES users(idUser)
);
