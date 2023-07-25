-- Create the Tablecoeur database (if it doesn't exist)
DROP DATABASE IF EXISTS Tablecoeur;
CREATE DATABASE Tablecoeur;

-- Switch to the Tablecoeur database
USE Tablecoeur;

-- Table : user
CREATE TABLE user (
    id INT PRIMARY KEY,
    pseudo VARCHAR(50),
    mail VARCHAR(100),
    pass VARCHAR(100),
    tel VARCHAR(20),
    sexe VARCHAR(10),
    adresse VARCHAR(200),
    date_creation DATE
);

-- Table : restaurant
CREATE TABLE restaurant (
    id INT PRIMARY KEY,
    nom VARCHAR(100),
    adresse VARCHAR(200),
    telephone VARCHAR(20),
    logo_url VARCHAR(200)
);

-- Table : don
CREATE TABLE don (
    id_user INT,
    id_restaurant INT,
    PRIMARY KEY (id_user, id_restaurant),
    FOREIGN KEY (id_user) REFERENCES user (id),
    FOREIGN KEY (id_restaurant) REFERENCES restaurant (id)
);