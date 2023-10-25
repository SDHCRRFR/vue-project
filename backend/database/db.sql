-- Create the Tabledecoeur database (if it doesn't exist)
DROP DATABASE IF EXISTS tabledecoeur;
CREATE DATABASE tabledecoeur;

-- Switch to the Tabledecoeur database

-- Table: role
CREATE TABLE tabledecoeur.role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100)
);

-- Table : user
CREATE TABLE tabledecoeur.user (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    date_creation DATE NOT NULL,
    role_id INT UNSIGNED,
    FOREIGN KEY(role_id) REFERENCES tabledecoeur.role(id)
);

-- Table : type restaurant
CREATE TABLE tabledecoeur.type_restaurant (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL UNIQUE
);

-- Table : restaurant
CREATE TABLE tabledecoeur.restaurant (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    adresse VARCHAR(200) NOT NULL,
    telephone VARCHAR(20) NOT NULL,
    logo_url VARCHAR(200),
    localisation VARCHAR(50) NOT NULL,
    menu TEXT,
    type_restaurant_id INT UNSIGNED,
    FOREIGN KEY(type_restaurant_id) REFERENCES tabledecoeur.type_restaurant(id)
);

-- Table : don
CREATE TABLE tabledecoeur.don (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNSIGNED,
    restaurant_id INT UNSIGNED,
    montant DECIMAL(5,2) NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES tabledecoeur.user(id),
    FOREIGN KEY (restaurant_id) REFERENCES tabledecoeur.restaurant(id)
);

-- remplir les tables
INSERT INTO tabledecoeur.role VALUES
(NULL, 'user'),
(NULL, 'admin');


INSERT INTO tabledecoeur.type_restaurant VALUES
(NULL, 'français'),
(NULL, 'chinois'),
(NULL, 'Italien'),
(NULL, 'américain'),
(NULL, 'canadien'),
(NULL, 'Maoré'),
(NULL, 'africain'),
(NULL, 'mexicain'),
(NULL, 'indien'),
(NULL, 'japonais');


INSERT INTO tabledecoeur.restaurant VALUES
     ( NULL, 'O cercle Pizza', 'paris', '0605704453', 'logo.jpeg', '48.9898; 48.28996', '<h3> Entrée <h3/> <p> kebab </p>', 1 ),
     ( NULL, 'O cercle Pizza', 'marseille', '0675704453', 'logoI.jpeg', '48.7677; 55.27676', '<h3> Entrée <h3/> <p> pizza </p>', 2 ),
     ( NULL, 'O cercle Pizza', 'lille', '0675704453', 'logoII.jpeg', '48.7675; 55.27677', '<h3> Entrée <h3/> <p> tacos </p>', 3 ),
     ( NULL, 'O cercle Pizza', 'nantes', '0675704453', 'logoIII.jpeg', '48.7666; 55.27675', '<h3> Entrée <h3/> <p> crêpe </p>', 4 ),
     ( NULL, 'O cercle Pizza', 'nice', '0675704453', 'logoIIII.jpeg', '48.7679; 55.27675', '<h3> Entrée <h3/> <p> sandwich </p>', 5 ),
     ( NULL, 'O cercle', 'monaco', '0675704453', 'logoU.jpeg', '48.7643; 55.27686', '<h3> Entrée <h3/> <p> assiette kebab </p>', 6 ),
     ( NULL, 'O cercle Pizza', 'paris', '0675774453', 'logoIIV.jpeg', '48.7633; 55.27678', '<h3> Entrée <h3/> <p> burger </p>', 7 ),
     ( NULL, 'O cercle Pizza', 'paris', '0615704453', 'logoIU.jpeg', '48.7611; 55.27656', '<h3> Entrée <h3/> <p> poulet </p>', 8 ),
     ( NULL, 'O cercle Pizza', 'paris', '0699744453', 'logoIIU.jpeg', '48.1132; 55.27657', '<h3> Entrée <h3/> <p> pasta </p>', 9 ),;
