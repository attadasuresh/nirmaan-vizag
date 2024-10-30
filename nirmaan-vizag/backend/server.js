const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const app = express();
const upload = require("./multer");
const jwt = require('jsonwebtoken');

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
    const sql = "INSERT INTO registerdata (fullname, email, mobile, qualification, college, dateofbirth, address) VALUES (?)";
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

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

app.post('/logindata', (req, res) => {
    const { username, password } = req.body;   
    const checkUserSql = 'SELECT * FROM login WHERE username = ?';
    db.query(checkUserSql, [username], (err, data) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        if (data.length === 0) {
            return res.status(404).json({ error: 'No user found' });
        }

        const user = data[0];
        const isPasswordMatched = password === user.password;

        if (!isPasswordMatched) {
            return res.status(401).json({ error: 'Wrong credentials' });
        }

        const token = jwt.sign(
            { id: user.id },
            JWT_SECRET,
            { expiresIn: '5h' }
        );

        return res.json({ message: 'Login successful', user, token });
    });
});
  
// Route to get all form data
app.get('/formdataget', (req, res) => {
    const sql = "SELECT * FROM registerdata";
    db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
});
  
// Route to delete data by id
app.delete('/formdatadelete/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM registerdata WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.json({ message: "Data deleted successfully" });
    });
});

app.post('/placement', upload.single("image"), (req, res) => {
    const filePath = path.join('uploads', req.file.filename);

    const values = [
        req.body.fullName,
        req.body.salary,
        req.body.companyName,
        req.body.collage,
        req.body.batch,
        filePath 
    ];

    const sql = "INSERT INTO placementdetails (fullName, salary, companyName, collage, batch, image) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }
        res.send('Data inserted successfully');
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001.");
});
