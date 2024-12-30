// Import dependencies
const express = require('express');
const multer = require('multer');
// const mysql = require('mysql');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Configure database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const SECRET_KEY = process.env.SECRET_KEY;

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

// API Routes
// Candidate Registration
app.get('/',(req,res) => {
  res.send("My server is running at port 5000!");
});

app.get('/myurl',(req,res) => {
  res.send("This is my url!")
})
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err, result) => {
    console.log(result);
    if (err) return res.status(500).send(err);
    res.status(200).send('Candidate registered successfully');
  });
});

// Candidate Login
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   const sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
//   db.query(sql, [email, password], (err, results) => {
//     if (err) return res.status(500).send(err);
//     if (results.length > 0) {
//       res.status(200).json({ message: 'Login successful', user: results[0] });
//     } else {
//       res.status(401).send('Invalid email or password');
//     }
//   });
// });

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
          if (err) return res.status(500).send(err);
          if (result.length === 0) return res.status(404).send({ message: 'User not found' });

          console.log(result);
          const user = result[0];
          console.log(user);
          // const isPasswordValid = bcrypt.compare(password, user.password);

          // if (!isPasswordValid)
          //     return res.status(401).send({ message: 'Invalid credentials' });

          const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
              expiresIn: '1h',
          });

          // res.send({ token });
          res.status(200).json({ message: 'Login Successful', token }); 
      }
  );
});

app.get('/dashboard', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send({ message: 'Token required' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return res.status(403).send({ message: 'Invalid token' });

      res.send({ message: 'Welcome to the protected route!', user: decoded });
  });
});

// CV Upload
// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Create the `uploads` directory if it doesn't exist
const fs = require("fs");
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// API endpoint for CV upload
app.post("/upload-cv", upload.single("cv"), (req, res) => {
  const { name, email, number } = req.body;

  // Validate input
  if (!name || !email || !number || !req.file) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Save form data and file path to the database
  const sql = `INSERT INTO candidates (name, email, phone, cv_path) VALUES (?, ?, ?, ?)`;
  const values = [name, email, number, req.file.path];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error saving data:", err);
      return res.status(500).json({ error: "Failed to save data" });
    }
    res.status(200).json({ message: "CV uploaded successfully", candidateId: result.insertId });
  });
});

// Admin - View All Candidates
app.get('/admin/candidates', (req, res) => {
  const sql = 'SELECT * FROM candidates';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({results});
  });
});

// Admin - Export Data
app.get('/admin/export', (req, res) => {
  const sql = 'SELECT * FROM candidates';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    // Simple CSV export logic
    let csv = 'ID,Name,Email,CV Path\n';
    results.forEach(row => {
      csv += `${row.id},${row.name},${row.email},${row.cv_path}\n`;
    });
    res.header('Content-Type', 'text/csv');
    res.attachment('candidates.csv');
    res.send(csv);
  });
});

app.post('/admin', (req,res) => {
  const {email, password} = req.body;
  console.log(email);
  console.log(password);
  if(email === 'admin@jobs' && password === 'admin'){
  console.log("Success");

  res.status(200).json({message: 'success'});
  }else{
    res.status(404).json({message: 'Invalid User'})
  }
});

// Static files for uploaded CVs
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
