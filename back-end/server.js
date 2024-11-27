var express = require('express');
var sql = require('mssql'); 
var cors = require('cors');
var app = express();

var config = {
    user: 'admin',
    password: '12345',
    server: 'LENOVO\\SQLEXPRESS',
    database: 'Booking',
    port: 1433,
    options: { encrypt: true, trustServerCertificate: true }
};
///////////////////////////////USE////////////////////////////////////////


app.use(cors());
app.use(express.json());
/////////////////////////////GET///////////////////////////////////////////

app.get('/', (req, res) =>{
        res.json("From Backend Side");
});

app.get('/admin/users', (req, res) => {
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });
        const pool = new sql.Request();
        pool.query('SELECT * FROM users', (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching data' });
            res.json(result.recordset);
        });
    });
});


app.get('/admin/reviews', (req, res) => {
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });
        const pool = new sql.Request();
        pool.query('SELECT * FROM reviews', (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching data' });
            res.json(result.recordset);
        });
    });
});



app.get('/admin/users/edit/:userId', (req, res) => {
    const { userId } = req.params;
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = 'SELECT * FROM users WHERE id = @userId';
        pool.input('userId', sql.Int, userId);
        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching user data' });
            if (!result.recordset.length) return res.status(404).json({ message: 'User not found' });
            res.json(result.recordset[0]);
        });
    });
});


app.get('/admin/hotels/edit/:hotelId', (req, res) => {
    const { hotelId } = req.params;
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = 'SELECT * FROM hotels WHERE id = @hotelId';
        pool.input('hotelId', sql.Int, hotelId);
        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching hotel data' });
            if (!result.recordset.length) return res.status(404).json({ message: 'Hotel not found' });
            res.json(result.recordset[0]);
        });
    });
});






app.get('/admin/reviews/edit/:reviewId', (req, res) => {
    const { reviewId } = req.params;
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = 'SELECT * FROM reviews WHERE id = @reviewId';
        pool.input('reviewId', sql.Int, reviewId);
        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching hotel data' });
            if (!result.recordset.length) return res.status(404).json({ message: 'Hotel not found' });
            res.json(result.recordset[0]);
        });
    });
});


app.get('/admin/hotels', (req, res) => {
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });
        const pool = new sql.Request();
        pool.query('SELECT * FROM hotels', (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching data' });
            res.json(result.recordset);
        });
    });
});

app.get('/admin/admins', (req, res) => {
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        pool.query('SELECT * FROM admins', (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching data' });
            res.json(result.recordset);
        });
    });
});

app.get('/admin/payments', (req, res) => {
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        pool.query('SELECT * FROM payments', (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching data' });
            res.json(result.recordset);
        });
    });
});

app.get('/admin/revenue', (req, res) => {
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        pool.query('SELECT SUM(amount) AS revenue FROM payments', (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching data' });
            res.json(result.recordset);
        });
    });
});

app.get('/admin/sales', (req, res) => {
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        pool.query("SELECT COUNT(*) AS sales FROM bookings WHERE status = 'confirmed'", (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching data' });
            res.json(result.recordset);
        });
    });
});

app.get('/admin/cost', (req, res) => {
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        pool.query('SELECT SUM(price) AS cost FROM rooms', (err, result) => {
            if (err) return res.status(500).json({ message: 'Error fetching data' });
            res.json(result.recordset);
        });
    });
});



////////////////////////////////////////PUT///////////////////////////////
app.put('/admin/users/edit/:userId', (req, res) => {
    const { userId } = req.params;
    const { name, email, phone, birthday, country, city, currency, active } = req.body;
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = `
            UPDATE users SET name = @name, email = @email, phone = @phone, 
            birthday = @birthday, country = @country, city = @city, 
            currency = @currency, active = @active WHERE id = @userId
        `;
        pool.input('userId', sql.Int, userId)
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('phone', sql.NVarChar, phone)
            .input('birthday', sql.Date, birthday)
            .input('country', sql.NVarChar, country)
            .input('city', sql.NVarChar, city)
            .input('currency', sql.NVarChar, currency)
            .input('active', sql.Bit, active);
        
        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error updating user data' });
            if (!result.rowsAffected) return res.status(404).json({ message: 'User not found' });
            res.json({ message: 'User updated successfully' });
        });
    });
});

app.put('/admin/hotels/edit/:hotelId', (req, res) => {
    const { hotelId } = req.params;
    const { name, address, city, country, description, rating } = req.body;

    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = `
            UPDATE hotels SET name = @name, address = @address, city = @city, 
            country = @country, description = @description, rating = @rating
            WHERE id = @hotelId
        `;
        pool.input('hotelId', sql.Int, hotelId)
            .input('name', sql.NVarChar, name)
            .input('address', sql.NVarChar, address)
            .input('city', sql.NVarChar, city)
            .input('country', sql.NVarChar, country)
            .input('description', sql.NVarChar, description)
            .input('rating', sql.Int, rating);

        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error updating hotel data' });
            if (!result.rowsAffected) return res.status(404).json({ message: 'Hotel not found' });
            res.json({ message: 'Hotel updated successfully' });
        });
    });
});




app.put('/admin/reviews/edit/:reviewId', (req, res) => {
    const { reviewId } = req.params;
    const { avatar, reviewer_name, hotel_name, days_ago_num, text } = req.body;

    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = `
            UPDATE reviews 
            SET avatar = @avatar, reviewer_name = @reviewer_name, hotel_name = @hotel_name, 
            days_ago_num = @days_ago_num, text = @text
            WHERE id = @reviewId
        `;
        pool.input('reviewId', sql.Int, reviewId)
            .input('avatar', sql.NVarChar, avatar)
            .input('reviewer_name', sql.NVarChar, reviewer_name)
            .input('hotel_name', sql.NVarChar, hotel_name)
            .input('days_ago_num', sql.Int, days_ago_num)
            .input('text', sql.NVarChar, text);

        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error updating review data' });
            if (!result.rowsAffected) return res.status(404).json({ message: 'Review not found' });
            res.json({ message: 'Review updated successfully' });
        });
    });
});

////////////////////////////////////////DELETE//////////////////////////////

app.delete('/admin/users/delete/:userId', (req, res) => {
    var {userId } = req.params; 
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = 'DELETE FROM users WHERE id = @userId'; 
        pool.input('userId', sql.Int, userId); 

        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error deleting user' });
            if (!result.rowsAffected) return res.status(404).json({ message: 'User not found' });
            res.json({ message: 'User deleted successfully' }); 
        });
    });
});



app.delete('/admin/reviews/delete/:reviewId', (req, res) => {
    var {reviewId } = req.params; 
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = 'DELETE FROM reviews WHERE id = @reviewId'; 
        pool.input('reviewId', sql.Int, reviewId); 

        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error deleting user' });
            if (!result.rowsAffected) return res.status(404).json({ message: 'User not found' });
            res.json({ message: 'User deleted successfully' }); 
        });
    });
});


app.delete('/admin/hotels/delete/:hotelId', (req, res) => {
    const { hotelId } = req.params;

    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = 'DELETE FROM hotels WHERE id = @hotelId';
        pool.input('hotelId', sql.Int, hotelId);

        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error deleting hotel' });
            if (!result.rowsAffected) return res.status(404).json({ message: 'Hotel not found' });
            res.json({ message: 'Hotel deleted successfully' });
        });
    });
});
//////////////////////////////////////////////////POST/////////////////////////
app.post('/admin/users/add', (req, res) => {
  
    const { name, email, phone, birthday, country, city, currency, active, password } = req.body;
  
    if (!password || password.trim() === '') {
      return res.status(400).json({ message: 'Password is required' });
    }
  
    sql.connect(config, (err) => {
      if (err) return res.status(500).json({ message: 'Database connection failed' });
  
      const pool = new sql.Request();
  
      const query = `
        INSERT INTO users (name, email, phone, birthday, country, city, currency, active, password)
        VALUES (@name, @email, @phone, @birthday, @country, @city, @currency, @active, @password)
      `;
  
      pool.input('name', sql.NVarChar, name)
        .input('email', sql.NVarChar, email)
        .input('password', sql.NVarChar, password)
        .input('phone', sql.NVarChar, phone)
        .input('birthday', sql.Date, birthday)
        .input('country', sql.NVarChar, country)
        .input('city', sql.NVarChar, city)
        .input('currency', sql.NVarChar, currency)
        .input('active', sql.Bit, active);
     
      pool.query(query, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error inserting user', error: err });
        res.json({ message: 'User added successfully' });
      });
    });
  });
  

  app.post('/admin/hotels/add', (req, res) => {
    const { name, address, city, country, description, rating } = req.body;
    
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Database connection failed' });

        const pool = new sql.Request();
        const query = `
            INSERT INTO hotels (name, address, city, country, description, rating)
            VALUES (@name, @address, @city, @country, @description, @rating)
        `;

        pool.input('name', sql.NVarChar, name)
            .input('address', sql.NVarChar, address)
            .input('city', sql.NVarChar, city)
            .input('country', sql.NVarChar, country)
            .input('description', sql.NVarChar, description)
            .input('rating', sql.Int, rating);

        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error inserting hotel', error: err });
            res.json({ message: 'Hotel added successfully' });
        });
    });
});


app.post('/admin/reviews/add', (req, res) => {
  
    const { avatar, reviewer_name, hotel_name, days_ago_num, text } = req.body;
  
    sql.connect(config, (err) => {
      if (err) return res.status(500).json({ message: 'Database connection failed' });
  
      const pool = new sql.Request();
  
      const query = `
        INSERT INTO reviews (avatar, reviewer_name, hotel_name, days_ago_num, text)
        VALUES (@avatar, @reviewer_name, @hotel_name, @days_ago_num, @text)
      `;
  
      pool.input('avatar', sql.NVarChar, avatar)
        .input('reviewer_name', sql.NVarChar, reviewer_name)
        .input('hotel_name', sql.NVarChar, hotel_name)
        .input('days_ago_num', sql.Int, days_ago_num)
        .input('text', sql.NVarChar, text);
  
      pool.query(query, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error inserting review', error: err });
        res.json({ message: 'Review added successfully' });
      });
    });
  });

app.post('/admin/login', (req, res) => {
    const { email, password } = req.body;  

    
    sql.connect(config, (err) => {
        if (err) return res.status(500).json({ message: 'Ошибка подключения к базе данных' });

        const pool = new sql.Request();
        const query = 'SELECT * FROM admins WHERE email = @email AND password = @password';  // Ищем пользователя в таблице админов
        
        pool.input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, password);  

        pool.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Ошибка запроса к базе данных' });

            if (result.recordset.length === 0) {  
                return res.status(401).json({ message: 'Неверный email или пароль' });
            }

         
            res.json({ role: 'admin', message: 'Вход выполнен успешно' });
        });
    });
});



app.listen(8081, () => console.log("Server is running on port 8081"));
