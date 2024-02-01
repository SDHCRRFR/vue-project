-- Supprime si elle existe
DROP DATABASE IF EXISTS tabledecoeur;
-- crée la base
CREATE DATABASE tabledecoeur;

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
    img VARCHAR(500),
    code_postale VARCHAR(50) NOT NULL,
    menu TEXT,
    type_restaurant_id INT UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(type_restaurant_id) REFERENCES tabledecoeur.type_restaurant(id)
);


-- remplir les tables
INSERT INTO tabledecoeur.role VALUES
(NULL, 'user'),
(NULL, 'admin');

-- jeSuisCool
INSERT INTO tabledecoeur.user VALUES (
    NULL, 
    'houdjadji said', 
    'houdjadji_said@carrefour.com', 
    '$argon2i$v=19$m=16,t=2,p=1$aEFDVUdOejREclpzWGhJYQ$z0nbKQ6mC8QDbsrGQSgLGg', 
    NOW(), 
    2
);


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
    --  ( NULL, 'O cercle Pizza', '1 Rue auguste Renoir', '0605704453', 'resto-I.jpeg', '93600', `<h3> Entrée <h3/> <p> kebab </p>`, 1 );


INSERT INTO tabledecoeur.restaurant (nom, adresse, telephone, img, code_postale, menu, type_restaurant_id) VALUES 
( NULL, 'Sweet Temptations', '131 Rue des Délices', '0654321098', 'resto-IIII.jpeg', '75006', '<h3> Menu <h3/> <p> Chocolate Fondue </p>', 6 );







     ( 'Kebab', ' 22 Quai Gallieni, Suresnes', '0675708453', 'resto-II.jpeg', '92150', '<h3> Entrée <h3/> <p> pizza </p>', 2 ),
     ( 'Le Baobab', '16 Rue Jean paul', '0675764453', 'resto-III.jpeg', '93200', '<h3> Entrée <h3/> <p> tacos </p>', 3 ),
     ( 'Chicken Wings', '21 Rue Paul Dukas', '0679704453', 'resto-IIII.jpeg', '91300', '<h3> Entrée <h3/> <p> crêpe </p>', 4 ),
     ( 'O Tacos', '21 Traverse des rosier', '0675204453', 'resto-v.webp', '13014', '<h3> Entrée <h3/> <p> sandwich </p>', 5 ),
     ( 'Crepeway', '45 Rue du peuple', '0675504453', 'resto-IIII.jpeg', '93270', '<h3> Entrée <h3/> <p> assiette kebab </p>', 6 ),
     ( 'O minifour', '31 Rue de Marseille', '0675774453', 'resto-II.jpeg', '95200', '<h3> Entrée <h3/> <p> burger </p>', 7 ),
     ( 'O Brochetti', '06 Rue des Egalades', '0615704453', 'resto-III.jpeg', '75018', '<h3> Entrée <h3/> <p> poulet </p>', 8 ),
     ( 'Nabab', '66 Rue des combattants', '0699744453', 'resto-IIII.jpeg', '75012', '<h3> Entrée <h3/> <p> pasta </p>', 9 ),
     ( 'Le Cap', '34 Rue de Belgique', '0699747453', 'resto-I.jpeg', '02200', '<h3> Entrée <h3/> <p> pasta </p>', 10 ),
     ( 'pizzaKebab', '21 rue Louis Blanc', '0615703453', 'resto-I.jpeg', '75010', '<h3> Entrée <h3/> <p> tacos - kebab </p>', 1 ),
     ( 'TheKebab', 'Drancy', '0675704453', 'resto-II.jpeg', '75001', '<h3> Entrée <h3/> <p> variétés </p>', 2 ),
     ( 'Snack ', 'Oparinor', '0675714453', 'resto-III.jpeg', '75002', '<h3> Entrée <h3/> <p> tacos </p>', 3 ),
     ( 'Chicken Frieds', 'Le Bourget', '0775704453', 'resto-IIII.jpeg', '75003', '<h3> Entrée <h3/> <p> crêpe </p>', 4 ),
     ( 'Tacos', 'La courneuve', '0675794453', 'resto-v.webp', '75004', '<h3> Entrée <h3/> <p> sandwich </p>', 5 ),
     ( 'Crepeway', 'MontCornet', '0625704453', 'resto-I.jpeg', '75005', '<h3> Entrée <h3/> <p> assiette kebab </p>', 6 ),
     ( 'minifour', 'Sarcelle', '0675574453', 'resto-II.jpeg', '75006', '<h3> Entrée <h3/> <p> burger </p>', 7 ),
     ( 'Brochette', 'Villepinte', '0615104453', 'resto-III.jpeg', '75007', '<h3> Entrée <h3/> <p> soupe </p>', 8 ),
     ( 'Point B', 'Vert Galant', '0699747453', 'resto-IIII.jpeg', '75008', '<h3> Entrée <h3/> <p> pasta </p>', 9 ),
     ( 'Le Cap dix', 'Sevran', '0694747453', 'resto-v.web', '75009', '<h3> Entrée <h3/> <p> crevette </p>', 10 ),
     ( 'La Bella Vita', '123 Avenue des Roses', '0612345678', 'resto-I.jpeg', '75001', '<h3> Menu <h3/> <p> Pasta Carbonara </p>', 1 );
     ( NULL, 'Gastronomique Heights', '456 Rue de la Liberté', '0654321098', 'resto-II.jpeg', '75002', '<h3> Menu <h3/> <p> Filet Mignon </p>', 2 ),
     ( NULL, 'Ocean Delights', '789 Boulevard des Saveurs', '0612345678', 'resto-III.jpeg', '75003', '<h3> Menu <h3/> <p> Seafood Platter </p>', 3 ),
     ( NULL, 'Spicy Bites', '101 Rue du Piment', '0654321098', 'resto-IIII.jpeg', '75004', '<h3> Menu <h3/> <p> Spicy Tacos </p>', 4 ),
     ( NULL, 'Mediterranean Flavors', '112 Avenue de lOliveraie', '0612345678', 'resto-v.webp', '75005', '<h3> Menu <h3/> <p> Mediterranean Platter </p>', 5 ),
     ( NULL, 'Sweet Temptations', '131 Rue des Délices', '0654321098', 'resto-IIII.jpeg', '75006', '<h3> Menu <h3/> <p> Chocolate Fondue </p>', 6 ),
     ( NULL, 'Gourmet Grillhouse', '145 Boulevard des Grillades', '0612345678', 'resto-II.jpeg', '75007', '<h3> Menu <h3/> <p> Gourmet Burgers </p>', 7 ),
     ( NULL, 'Sizzling Skewers', '162 Avenue des Brochettes', '0654321098', 'resto-III.jpeg', '75008', '<h3> Menu <h3/> <p> Sizzling Skewers </p>', 8 ),
     ( NULL, 'Healthy Haven', '179 Rue de la Santé', '0612345678', 'resto-IIII.jpeg', '75009', '<h3> Menu <h3/> <p> Quinoa Salad </p>', 9 ),
     ( NULL, 'Fusion Flavors', '194 Boulevard des Saveurs', '0654321098', 'resto-I.jpeg', '75010', '<h3> Menu <h3/> <p> Fusion Sushi </p>', 1 ),
     ( NULL, 'Soulful Soups', '209 Rue de la Chaleur', '0612345678', 'resto-I.jpeg', '75011', '<h3> Menu <h3/> <p> Chicken Noodle Soup </p>', 2 ),
     ( NULL, 'Fresh Catch', '224 Avenue des Poissons', '0654321098', 'resto-II.jpeg', '75012', '<h3> Menu <h3/> <p> Grilled Salmon </p>', 3 ),
     ( NULL, 'Tantalizing Tandoor', '241 Rue du Curry', '0612345678', 'resto-III.jpeg', '75013', '<h3> Menu <h3/> <p> Tandoori Chicken </p>', 4 ),
     ( NULL, 'Veggie Delights', '256 Avenue des Légumes', '0654321098', 'resto-v.webp', '75014', '<h3> Menu <h3/> <p> Vegetarian Platter </p>', 5 ),
     ( NULL, 'Decadent Desserts', '273 Rue des Sucreries', '0612345678', 'resto-I.jpeg', '75015', '<h3> Menu <h3/> <p> Decadent Chocolate Cake </p>', 6 ),
     ( NULL, 'Bread Basket', '290 Avenue du Pain', '0654321098', 'resto-II.jpeg', '75016', '<h3> Menu <h3/> <p> Artisanal Bread Basket </p>', 7 ),
     ( NULL, 'Smoke & Sizzle', '307 Rue de la Fumée', '0612345678', 'resto-III.jpeg', '75017', '<h3> Menu <h3/> <p> Smoked BBQ Ribs </p>', 8 ),
     ( NULL, 'Pasta Perfection', '324 Boulevard des Pâtes', '0654321098', 'resto-IIII.jpeg', '75018', '<h3> Menu <h3/> <p> Pesto Pasta </p>', 9 ),
     ( NULL, 'Wok Wonders', '341 Avenue du Wok', '0612345678', 'resto-v.web', '75019', '<h3> Menu <h3/> <p> Wok Specialties </p>', 10 ),
     ( NULL, 'Dessert Haven', '358 Rue des Desserts', '0654321098', 'resto-I.jpeg', '75020', '<h3> Menu <h3/> <p> Dessert Platter </p>', 1 );


-- ==========================================================================================================================================================