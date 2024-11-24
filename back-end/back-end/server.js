const express = require('express');
const sql = require('mssql');

const cors = require('cors');
const app = express();
app.use(cors());
app.get('/',(req,res)=>
{
    return res.json("From Backend Side");
})

const dbConfig = {
    user: 'admin',
    password: '12345',
    server: 'LENOVO\\SQLEXPRESS',
    database: 'Booking',
    port: 1433,
    options: {
        encrypt: true, 
        trustServerCertificate: true 
    }
};

sql.connect(dbConfig).then(pool => {
    app.get('/admin/users', async (req, res) => {
        try {
            const result = await pool.request().query('SELECT * FROM users');
            res.json(result.recordset);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Error fetching data' });
        }
    });
}).catch(err => {
    console.error('Database connection failed:', err);
    res.status(500).json({ message: 'Database connection failed' });
});




app.listen(8081,()=>{
    console.log("listening on port 8081");
})