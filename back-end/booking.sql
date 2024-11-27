CREATE DATABASE Booking;
GO
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

CREATE TABLE hotels (
    id INT IDENTITY PRIMARY KEY,  
    name NVARCHAR(255) NOT NULL, 
    address NVARCHAR(255), 
    city NVARCHAR(255),
    country NVARCHAR(255),
    description NVARCHAR(1000),
    rating INT CHECK (rating BETWEEN 1 AND 5), 
    created DATETIME DEFAULT GETDATE()
);


CREATE TABLE rooms (
    id INT IDENTITY PRIMARY KEY,
    hotel_id INT, 
    type NVARCHAR(255), 
    price DECIMAL(10, 2), 
    capacity INT,  
    description NVARCHAR(1000), 
    created DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (hotel_id) REFERENCES hotels(id) 
);

CREATE TABLE bookings (
    id INT IDENTITY PRIMARY KEY,
    user_id INT, 
    room_id INT, 
    check_in DATE, 
    check_out DATE,  
    total_price DECIMAL(10, 2),  
    status NVARCHAR(50) DEFAULT 'pending', 
    created DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES users(id), 
    FOREIGN KEY (room_id) REFERENCES rooms(id) 
);






CREATE TABLE payments (
    id INT IDENTITY PRIMARY KEY,
    booking_id INT, 
    amount DECIMAL(10, 2), 
    payment_date DATETIME DEFAULT GETDATE(),
    payment_method NVARCHAR(50),  
    status NVARCHAR(50) DEFAULT 'pending', 
    FOREIGN KEY (booking_id) REFERENCES bookings(id)  
);





INSERT INTO users (email, password, name, phone, birthday, country, city, currency,created,active)
VALUES
    ('mary@gmail.com', 'password123', 'Mary Zaiats', '+380995410270', '2004-10-12', 'Ukraine', 'Odesa', 'UAH', GETDATE(),1),
    ('ira@gmail.com', 'password456', 'Ira Hrebenchuk', '+380995410271', '1977-08-10', 'Ukraine', 'Odesa', 'USD',GETDATE(), 1),
	  ('victor@gmail.com', 'password789', 'Victor Pronchatov', '+380995410270', '2005-10-12','Moldova', 'Chisinau', 'MDL',GETDATE(), 1),
    ('misha@gmail.com', 'password101', 'Misha Zaiats', '+380995410273', '1999-10-02','Romania', 'Brasov', 'RON',GETDATE(), 1),
    ('oleg@gmail.com', 'password102', 'Oleg Hrebenchuk', '+380995410274','2002-09-30', 'Ukraine', 'Odesa', 'UAH',GETDATE(), 1)

INSERT INTO admins (email, password, name, profession)
VALUES
    ('admin1@gmail.com', 'password1', 'Admin1', 'System Administrator'),
    ('admin2@gmail.com', 'password2', 'Admin2', 'Software Engineer');


INSERT INTO hotels (name, address, city, country, description, rating, created)
VALUES
    ('Hotel Odesa', '1 Shevchenko St, Odesa', 'Odesa', 'Ukraine', 'Beautiful hotel with a sea view', 5, GETDATE()),
    ('Hotel Kyiv', '5 Khreshchatyk St, Kyiv', 'Kyiv', 'Ukraine', 'Luxurious hotel in the heart of Kyiv', 4, GETDATE()),
    ('Hotel Lviv', '10 Halytska St, Lviv', 'Lviv', 'Ukraine', 'Cozy hotel with great food', 4, GETDATE()),
    ('Hotel New York', '15 Broadway St, New York', 'New York', 'USA', 'Modern hotel with a skyline view', 5, GETDATE()),
    ('Hotel London', '20 Oxford Street, London', 'London', 'UK', 'Classic hotel with British hospitality', 5, GETDATE());



	INSERT INTO rooms (hotel_id, type, price, capacity, description, created)
VALUES
    -- Hotel Odesa
    (1, 'Single Room', 100.00, 1, 'Cozy room with a sea view', GETDATE()),
    (1, 'Double Room', 150.00, 2, 'Spacious room with a balcony', GETDATE()),
    (1, 'Suite', 250.00, 3, 'Luxurious suite with a living room', GETDATE()),
    
    -- Hotel Kyiv
    (2, 'Single Room', 120.00, 1, 'Comfortable room in the city center', GETDATE()),
    (2, 'Double Room', 180.00, 2, 'Modern room with great facilities', GETDATE()),
    (2, 'Suite', 300.00, 3, 'Elegant suite with panoramic views', GETDATE()),
    
    -- Hotel Lviv
    (3, 'Single Room', 80.00, 1, 'Cozy room with warm decor', GETDATE()),
    (3, 'Double Room', 130.00, 2, 'Spacious room with a fireplace', GETDATE()),
    (3, 'Suite', 200.00, 3, 'Luxury suite with a private jacuzzi', GETDATE()),
    
    -- Hotel New York
    (4, 'Single Room', 250.00, 1, 'Modern room with a skyline view', GETDATE()),
    (4, 'Double Room', 350.00, 2, 'Stylish room with high-end amenities', GETDATE()),
    (4, 'Suite', 500.00, 3, 'Exclusive suite with city views', GETDATE()),
    
    -- Hotel London
    (5, 'Single Room', 220.00, 1, 'Classic room with luxury amenities', GETDATE()),
    (5, 'Double Room', 320.00, 2, 'Spacious room with a comfortable bed', GETDATE()),
    (5, 'Suite', 550.00, 3, 'Premium suite with a beautiful city view', GETDATE());


	INSERT INTO bookings (user_id, room_id, check_in, check_out, total_price, status, created)
VALUES
    -- Mary (user_id = 1)
    (1, 1, '2024-12-01', '2024-12-05', 500.00, 'confirmed', GETDATE()),
    
    -- Ira (user_id = 2)
    (2, 4, '2024-12-10', '2024-12-15', 900.00, 'pending', GETDATE()),
    
    -- Victor (user_id = 3)
    (3, 7, '2024-11-15', '2024-11-20', 400.00, 'confirmed', GETDATE()),
    
    --Misha (user_id = 4)
    (4, 10, '2024-12-20', '2024-12-25', 1250.00, 'pending', GETDATE()),
    
    -- Oleg (user_id = 5)
    (5, 13, '2024-11-25', '2024-11-30', 880.00, 'confirmed', GETDATE());



	INSERT INTO payments (booking_id, amount, payment_date, payment_method, status)
VALUES
    --  Mary (booking_id = 6)
    (6, 500.00, GETDATE(), 'Credit Card', 'completed'),
    -- Oleg (booking_id = 10)
    (10, 880.00, GETDATE(), 'Credit Card', 'pending');





	CREATE TABLE reviews (
    id INT IDENTITY PRIMARY KEY,
    avatar NVARCHAR(255),               
    reviewer_name NVARCHAR(255),        
    hotel_name NVARCHAR(255),           
    days_ago_num INT,                   
    text NVARCHAR(MAX),                 
    created DATETIME DEFAULT GETDATE()  
);

INSERT INTO reviews (avatar, reviewer_name, hotel_name, days_ago_num, text)
VALUES
    ('./avatar-1.png', 'Name', 'Hotel name', 12, 'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor.'),
    ('./avatar-2.png', 'Name', 'Hotel name', 19, 'Lorem ipsum dolor sit amet consectetur. Facilisis nulla eun. Ac netus tincidunt sed.'),
    ('./avatar-3.png', 'Name', 'Hotel name', 12, 'Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt.'),
    ('./avatar-4.png', 'Name', 'Hotel name', 12, 'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor.'),
    ('./avatar-5.png', 'Name', 'Hotel name', 19, 'Lorem ipsum dolor sit amet consectetur. Facilisis nulla eun. Ac netus tincidunt sed.'),
    ('./avatar-6.png', 'Name', 'Hotel name', 12, 'Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt.'),
    ('./avatar-7.png', 'Name', 'Hotel name', 12, 'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor.'),
    ('./avatar-8.png', 'Name', 'Hotel name', 19, 'Lorem ipsum dolor sit amet consectetur. Facilisis nulla eun. Ac netus tincidunt sed.'),
    ('./avatar-9.png', 'Name', 'Hotel name', 12, 'Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt.'),
    ('./avatar-4.png', 'Name', 'Hotel name', 12, 'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor.'),
    ('./avatar-5.png', 'Name', 'Hotel name', 19, 'Lorem ipsum dolor sit amet consectetur. Facilisis nulla eun. Ac netus tincidunt sed.'),
    ('./avatar-6.png', 'Name', 'Hotel name', 12, 'Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt.');
