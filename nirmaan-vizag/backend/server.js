const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const upload = require("./multer")

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


app.post('/logindata', (req, res) => {
    const { username, password } = req.body;
    console.log('Received login data:', req.body); // Debugging to check incoming data
    
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    const values = [username, password];
    
    db.query(sql, values, (err, data) => {
      if (err) {  
        console.error('Database query error:', err);
        return res.json({ message: "Error" });
      }
      if (data.length > 0) {
        return res.json({ message: "Login successfully" });
      } else {
        return res.json({ message: "No record found" });
      }
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
  

// app.post('/placement',upload.single("image"),(req,res)=>{
//     console.log(req.image);
//     const values = [
//         req.body.fullName,
//         req.body.companyName,
//         req.body.id,
//         req.image
//     ];
// })
app.listen(3001, () => {
    console.log("Server running on port 3001.");
});
