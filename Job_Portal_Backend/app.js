// Import dependencies
const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure database connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Faizan@123',
  database: 'job_portal',
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

// API Routes
// Candidate Registration
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO candidates (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Candidate registered successfully');
  });
});

// Candidate Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM candidates WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).send('Invalid email or password');
    }
  });
});

// CV Upload
app.post('/upload-cv', upload.single('cv'), (req, res) => {
  const { candidateId } = req.body;
  const cvPath = req.file.path;
  const sql = 'UPDATE candidates SET cv_path = ? WHERE id = ?';
  db.query(sql, [cvPath, candidateId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('CV uploaded successfully');
  });
});

// Admin - View All Candidates
app.get('/admin/candidates', (req, res) => {
  const sql = 'SELECT * FROM candidates';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
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

// Static files for uploaded CVs
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
