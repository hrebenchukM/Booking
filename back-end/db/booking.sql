CREATE DATABASE Booking;
USE Booking;

CREATE TABLE users (
    id INT IDENTITY PRIMARY KEY,  
	email NVARCHAR(255) NOT NULL,
	password NVARCHAR(255) NOT NULL,      
    name NVARCHAR(255) NOT NULL, 
	phone NVARCHAR(20),   
	birthday DATE NOT NULL,                          
    country NVARCHAR(255),                        
    city NVARCHAR(255),                          
    currency NVARCHAR(3),
	created DATETIME DEFAULT GETDATE(),
	active BIT DEFAULT 1
);

CREATE TABLE admins (
    id INT IDENTITY PRIMARY KEY,  
	email NVARCHAR(255) NOT NULL,
	password NVARCHAR(255) NOT NULL,
	name NVARCHAR(255) NOT NULL, 
	profession NVARCHAR(255) NOT NULL
);


INSERT INTO users (email, password, name, phone, birthday, country, city, currency,active)
VALUES
    ('mary@gmail.com', 'password123', 'Mary Zaiats', '+380995410270', '2004-10-12', 'Ukraine', 'Odesa', 'USD', 1),
    ('ira@gmail.com', 'password456', 'Ira Hrebenchuk', '+380995410271', '1977-08-10', 'Ukraine', 'Odesa', 'UAH', 1)

INSERT INTO admins (email, password, name, profession)
VALUES
    ('admin1@gmail.com', 'password1', 'Admin1', 'System Administrator'),
    ('admin2@gmail.com', 'password2', 'Admin2', 'Software Engineer');
