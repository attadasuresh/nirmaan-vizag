const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nirmaan-vizag',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});

app.post('/formdata', (req, res) => {
    const sql = "INSERT INTO registerdata (`fullname`, `email`, `mobile`, `qualification`, `college`, `dateofbirth`, `address`) VALUES (?)";
    const values = [
        req.body.fullname,
        req.body.email,
        req.body.mobile,
        req.body.qualification,   
        req.body.college,         
        req.body.dateofbirth,
        req.body.address,
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json({ error: err });
        }
        return res.json({ message: "Data inserted successfully", data });
    });
});

app.get('/formdataget', (req, res) => {
    const sql = "SELECT * FROM registerdata";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});
