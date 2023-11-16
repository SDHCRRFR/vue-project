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
    img VARCHAR(200),
    code_postale VARCHAR(50) NOT NULL,
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
-------------------------------------------------------------------------------------------)>
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
     ( NULL, 'O cercle Pizza', '1 Rue auguste Renoir', '0605704453', './public/resto-I.jpeg', '93600', '<h3> Entrée <h3/> <p> kebab </p>', 1 ),
     ( NULL, 'Kebab', 'Quai Gallieni, Suresnes', '0675708453', './public/resto-II.jpeg', '92150', '<h3> Entrée <h3/> <p> pizza </p>', 2 ),
     ( NULL, 'Le Baobab', '16 Rue Jean paul', '0675764453', './public/resto-III.jpeg', '93200', '<h3> Entrée <h3/> <p> tacos </p>', 3 ),
     ( NULL, 'Chicken Wings', '21 Rue Paul Dukas', '0679704453', './public/resto-IIII.jpeg', '91300', '<h3> Entrée <h3/> <p> crêpe </p>', 4 ),
     ( NULL, 'O Tacos', '21 Traverse des rosier', '0675204453', './public/resto-v.webp', '13014', '<h3> Entrée <h3/> <p> sandwich </p>', 5 ),
     ( NULL, 'Crepeway', '45 Rue du peuple', '0675504453', './public/resto-IIIII.jpeg', '93270', '<h3> Entrée <h3/> <p> assiette kebab </p>', 6 ),
     ( NULL, 'O minifour', '31 Rue de Marseille', '0675774453', './public/resto-II.jpeg', '95200', '<h3> Entrée <h3/> <p> burger </p>', 7 ),
     ( NULL, 'O Brochetti', '06 Rue des Egalades', '0615704453', './public/resto-III.jpeg', '75018', '<h3> Entrée <h3/> <p> poulet </p>', 8 ),
     ( NULL, 'Nabab', '66 Rue des combattants', '0699744453', './public/resto-IIII.jpeg', '75012', '<h3> Entrée <h3/> <p> pasta </p>', 9 ),
     ( NULL, 'Le Cap', '34 Rue de Belgique', '0699747453', './public/resto-I.jpeg', '02200', '<h3> Entrée <h3/> <p> pasta </p>', 10 );

    --  =========================================================================================================================

     ( NULL, 'pizzaKebab' 'Blanc-Mesnil' '0615703453', './public/resto-I.jpeg', '48.9698; 48.28995', '<h3> Entrée <h3/> <p> tacos - kebab </p>', 11 ),
     ( NULL, 'TheKebab', 'Drancy', '0675704453', './public/resto-II.jpeg', '48.7676; 55.27676', '<h3> Entrée <h3/> <p> variétés </p>', 12 ),
     ( NULL, 'Snack ', 'Oparinor', '0675714453', './public/resto-III.jpeg', '48.7675; 55.27677', '<h3> Entrée <h3/> <p> tacos </p>', 13 ),
     ( NULL, 'Chicken Frieds', 'Le Bourget', '0775704453', './public/resto-IIII.jpeg', '48.7666; 55.27673', '<h3> Entrée <h3/> <p> crêpe </p>', 14 ),
     ( NULL, 'Tacos', 'La courneuve', '0675794453', './public/resto-v.webp', '48.7679; 55.27674', '<h3> Entrée <h3/> <p> sandwich </p>', 15 ),
     ( NULL, 'Crepeway', 'MontCornet', '0625704453', './public/resto-I.jpeg', '48.7653; 55.27683', '<h3> Entrée <h3/> <p> assiette kebab </p>', 16 ),
     ( NULL, 'minifour', 'Sarcelle', '0675574453', './public/resto-II.jpeg', '48.7633; 55.27678', '<h3> Entrée <h3/> <p> burger </p>', 17 ),
     ( NULL, 'Brochette', 'Villepinte', '0615104453', './public/resto-III.jpeg', '48.7611; 55.27656', '<h3> Entrée <h3/> <p> soupe </p>', 18 ),
     ( NULL, 'Point B', 'Vert Galant', '0699747453', './public/resto-IIII.jpeg', '48.1132; 55.27659', '<h3> Entrée <h3/> <p> pasta </p>', 19 ),
     ( NULL, 'Le Cap dix', 'Sevran', '0694747453', './public/resto-v.web', '93200', '<h3> Entrée <h3/> <p> crevette </p>', 20 );

-- ==========================================================================================================================================================

     ( NULL, 'O cercle Pizza' 'Suisse' '0605704453', './public/resto-I.jpeg', '48.9898; 48.28996', '<h3> Entrée <h3/> <p> kebab </p>', 21 ),
     ( NULL, 'O Kebab', 'Mandeure', '0675704453', './public/resto-II.jpeg', '48.7677; 55.27676', '<h3> Entrée <h3/> <p> pizza </p>', 22 ),
     ( NULL, 'O Baobab', 'Lille', '0675704453', './public/resto-III.jpeg', '48.7675; 55.27677', '<h3> Entrée <h3/> <p> tacos </p>', 23 ),
     ( NULL, 'O Chicken', 'Nantes', '0675704453', './public/resto-IIII.jpeg', '48.7666; 55.27675', '<h3> Entrée <h3/> <p> crêpe </p>', 24 ),
     ( NULL, 'O Tacos', 'Nice', '0675704453', './public/resto-v.webp', '48.7679; 55.27675', '<h3> Entrée <h3/> <p> sandwich </p>', 25 ),
     ( NULL, 'O Crepeway', 'Monaco', '0675704453', './public/resto-I.jpeg', '48.7643; 55.27686', '<h3> Entrée <h3/> <p> assiette kebab </p>', 26 ),
     ( NULL, 'O minifour', 'Paris', '0675774453', './public/resto-II.jpeg', '48.7633; 55.27678', '<h3> Entrée <h3/> <p> burger </p>', 27 ),
     ( NULL, 'O Brochetti', 'Marseille', '0615704453', './public/resto-III.jpeg', '48.7611; 55.27656', '<h3> Entrée <h3/> <p> poulet </p>', 28 ),
     ( NULL, 'O Nabab', 'Lyon', '0699744453', './public/resto-IIII.jpeg', '48.1132; 55.27657', '<h3> Entrée <h3/> <p> pasta </p>', 29 ),
     ( NULL, 'Le Cap', 'Belgique', '0699747453', './public/resto-v.webp', '48.1232; 45.27657', '<h3> Entrée <h3/> <p> pasta </p>', 30 );
