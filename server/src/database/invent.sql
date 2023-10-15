
CREATE DATABASE invent;

-- Use the "invent" database
USE invent;


CREATE TABLE users (
    userID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    isAdmin BOOLEAN NOT NULL,
    password VARCHAR(50) NOT NULL
);


CREATE TABLE packages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(50) NOT NULL,
    weightInterval VARCHAR(255) NOT NULL,
    priceCalculation VARCHAR(255) NOT NULL
);


CREATE TABLE transports (
    id INT PRIMARY KEY AUTO_INCREMENT,
    companyName VARCHAR(255) NOT NULL
);


CREATE TABLE PostalCode (
    postalCodeID INT PRIMARY KEY AUTO_INCREMENT,
    transportID INT,
    postalCodeStart VARCHAR(10) NOT NULL,
    postalCodeEnd VARCHAR(10) NOT NULL,
    FOREIGN KEY (transportID) REFERENCES transports(id)
);

-- Create the "Shipment" table
CREATE TABLE shipments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    shipmentAddress VARCHAR(255) NOT NULL,
    postalCode VARCHAR(10) NOT NULL,
    recipientName VARCHAR(255) NOT NULL,
    senderName VARCHAR(255) NOT NULL,
    weight DECIMAL(10, 2) NOT NULL,
    packageTypeID INT,
    shipmentPrice DECIMAL(10, 2) NOT NULL,
    transportID INT,
    creationDate DATE NOT NULL,
    userOwner INT,
    FOREIGN KEY (userOwner) REFERENCES users(userID),
    FOREIGN KEY (packageTypeID) REFERENCES packages(id),
    FOREIGN KEY (transportID) REFERENCES transports(id)
);

-- Insert dummy data for 10 users, including one administrator
INSERT INTO users (name, email, isAdmin, password) VALUES
    ('Admin User', 'admin@example.com', 1, 'adminpassword'),
    ('User 1', 'user1@example.com', 0, 'user1password'),
    ('User 2', 'user2@example.com', 0, 'user2password'),
    ('User 3', 'user3@example.com', 0, 'user3password'),
    ('User 4', 'user4@example.com', 0, 'user4password'),
    ('User 5', 'user5@example.com', 0, 'user5password'),
    ('User 6', 'user6@example.com', 0, 'user6password'),
    ('User 7', 'user7@example.com', 0, 'user7password'),
    ('User 8', 'user8@example.com', 0, 'user8password'),
    ('User 9', 'user9@example.com', 0, 'user9password');

-- Insert dummy data for packages
INSERT INTO packages (type, weightInterval, priceCalculation) VALUES
    ('Paquete ultra ligero', '0 < kg ≤ 0.1', 'Precio = kg * 5'),
    ('Paquete ligero', '0.1 < kg ≤ 0.3', 'Precio = kg * 5 + 1'),
    ('Paquete estándar', '0.3 < kg ≤ 5', 'Precio = kg * 10'),
    ('Paquete pesado', '5 < kg ≤ 10', 'Precio = kg * 5 + kg + 75'),
    ('Gran volumen', '10 < kg ≤ ∞', 'Precio = (kg - 10) * 7.5 + 130 + kg');


INSERT INTO transports (companyName) VALUES  
    ('Correos'),
    ('SEUR');
