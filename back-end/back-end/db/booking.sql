CREATE DATABASE Booking;
GO
USE Booking;

CREATE TABLE users (
    id INT IDENTITY PRIMARY KEY,  
	email NVARCHAR(255) NOT NULL,
	password NVARCHAR(255) NOT NULL,      
    name NVARCHAR(255) NOT NULL, 
	phone NVARCHAR(20),   
	birth_date DATE NOT NULL,                          
    country NVARCHAR(255),                        
    city NVARCHAR(255),                          
    currency NVARCHAR(3)
);

CREATE TABLE admins (
    id INT IDENTITY PRIMARY KEY,  
	email NVARCHAR(255) NOT NULL,
	password NVARCHAR(255) NOT NULL,
	name NVARCHAR(255) NOT NULL, 
	profession NVARCHAR(255) NOT NULL
);


INSERT INTO users (email, password, name, phone, birth_date, country, city, currency)
VALUES
    ('mary@gmail.com', 'password123', 'Mary Zaiats', '+380995410270', '2004-10-12', 'Ukraine', 'Odesa', 'USD'),
    ('ira@gmail.com', 'password456', 'Ira Hrebenchuk', '+380995410271', '1977-08-10', 'Ukraine', 'Odesa', 'UAH')

INSERT INTO admins (email, password, name, profession)
VALUES
    ('admin1@gmail.com', 'password1', 'Admin1', 'System Administrator'),
    ('admin2@gmail.com', 'password2', 'Admin2', 'Software Engineer');
