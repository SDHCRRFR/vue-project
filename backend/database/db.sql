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
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    ville VARCHAR(200) NOT NULL,
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
(NULL, 'américain'),
(NULL, 'indien'),
(NULL, 'japonais');


INSERT INTO tabledecoeur.restaurant VALUES
(NULL, 'Le Baobab', 'auguste renoir aulnay', '0605704453', 'logo.jpeg', '48.9898; 48.2899',  '<h3> Entrée <h3/> <p> kebab </p>', 1 ),

(NULL, 'O cercle Pizza, évêque', '0675676765', 'logo.jpeg', '48.7677; 55.27676', '<h3> Entrée <h3/> <p> kebab </p>', 2 ),

(NULL, 'O cercle Pizza, évêque', '0675676765', 'logo.jpeg', '48.7677; 55.27676', '<h3> Entrée <h3/> <p> kebab </p>', 3 ),
(NULL, 'O cercle Pizza, évêque', '0675676765', 'logo.jpeg', '48.7677; 55.27676', '<h3> Entrée <h3/> <p> kebab </p>', 4 ),
(NULL, 'O cercle Pizza, évêque', '0675676765', 'logo.jpeg', '48.7677; 55.27676', '<h3> Entrée <h3/> <p> kebab </p>', 5 ),
(NULL, 'O cercle Pizza, évêque', '0675676765', 'logo.jpeg', '48.7677; 55.27676', '<h3> Entrée <h3/> <p> kebab </p>', 6 ),
(NULL, 'O cercle Pizza, évêque', '0675676765', 'logo.jpeg', '48.7677; 55.27676', '<h3> Entrée <h3/> <p> kebab </p>', 7 ),
(NULL, 'O cercle Pizza, évêque', '0675676765', 'logo.jpeg', '48.7677; 55.27676', '<h3> Entrée <h3/> <p> kebab </p>', 8 ),
(NULL, 'delarte', 'traverse des rosier 13014', '0699765487', 'logo.png', '41.9898; 48.5555',  '<h3> Entrée <h3/> <p> salade </p>', 2 );