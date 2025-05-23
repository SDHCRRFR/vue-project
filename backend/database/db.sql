-- Supprime si elle existe
DROP DATABASE IF EXISTS products;
-- crée la base
CREATE DATABASE products;

-- Table: role
CREATE TABLE products.role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100)
);

-- Table : user
CREATE TABLE products.user (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    date_creation DATE NOT NULL,
    role_id INT UNSIGNED,
    FOREIGN KEY(role_id) REFERENCES products.role(id)
);

-- Table : type restaurant
CREATE TABLE products.type_restaurant (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL UNIQUE
);

-- Table : restaurant
CREATE TABLE products.restaurant (
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
    FOREIGN KEY(type_restaurant_id) REFERENCES products.type_restaurant(id)
);


-- remplir les tables
INSERT INTO products.role VALUES
(NULL, 'user'),
(NULL, 'admin');


-- jeSuisCool
INSERT INTO products.user VALUES (
    NULL, 
    'houdjadji said', 
    'houdjadji_said@carrefour.com', 
    '$argon2i$v=19$m=16,t=2,p=1$aEFDVUdOejREclpzWGhJYQ$z0nbKQ6mC8QDbsrGQSgLGg', 
    NOW(), 
    2
);


INSERT INTO products.type_restaurant VALUES
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


INSERT INTO products.restaurant (nom, adresse, telephone, img, code_postale, menu, type_restaurant_id) VALUES 
     ( 'Sweet Temptations', '131 Rue des Délices', '0654321098', 'resto-IIII.jpeg', '75006', '<h3> Menu <h3/> <p> Chocolate Fondue </p>', 6 ),
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
     ( 'Crepeway', 'MontCornet', '0625704453', 'resto-I.jpeg', '75005', '<h3> Entrée <h3/> <p> assiette kebab </p>', 6 ),
     ( 'minifour', 'Sarcelle', '0675574453', 'resto-II.jpeg', '75006', '<h3> Entrée <h3/> <p> burger </p>', 7 ),
     ( 'Brochette', 'Villepinte', '0615104453', 'resto-III.jpeg', '75007', '<h3> Entrée <h3/> <p> soupe </p>', 8 ),
     ( 'Point B', 'Vert Galant', '0699747453', 'resto-IIII.jpeg', '75008', '<h3> Entrée <h3/> <p> pasta </p>', 9 ),
     ( 'La Bella Vita', '123 Avenue des Roses', '0612345678', 'resto-I.jpeg', '75001', '<h3> Menu <h3/> <p> Pasta Carbonara </p>', 1 ),
     ( 'Gastronomique Heights', '456 Rue de la Liberté', '0654321098', 'resto-II.jpeg', '75002', '<h3> Menu <h3/> <p> Filet Mignon </p>', 2 );
-- =================================================================================================================================