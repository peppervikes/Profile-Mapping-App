const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: 'Vikalp@2003',     
    database: 'profile_mapping', 
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Test route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Fetch all profiles
app.get('/profiles', (req, res) => {
    const query = 'SELECT * FROM profiles';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching profiles:', err);
            res.status(500).send('Error fetching profiles');
        } else {
            res.json(results);
        }
    });
});

// Add a new profile
app.post('/profiles', (req, res) => {
    const { name, description, image_url, address } = req.body;
    const query = 'INSERT INTO profiles (name, description, image_url, address) VALUES (?, ?, ?, ?)';
    db.query(query, [name, description, image_url, address], (err, results) => {
        if (err) {
            console.error('Error adding profile:', err);
            res.status(500).send('Error adding profile');
        } else {
            res.status(201).send('Profile added successfully');
        }
    });
});

// Update a profile
app.put('/profiles/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, image_url, address } = req.body;
    const query = 'UPDATE profiles SET name = ?, description = ?, image_url = ?, address = ? WHERE id = ?';
    db.query(query, [name, description, image_url, address, id], (err, results) => {
        if (err) {
            console.error('Error updating profile:', err);
            res.status(500).send('Error updating profile');
        } else {
            res.send('Profile updated successfully');
        }
    });
});

// Delete a profile
app.delete('/profiles/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM profiles WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting profile:', err);
            res.status(500).send('Error deleting profile');
        } else {
            res.send('Profile deleted successfully');
        }
    });
});

// Fetch a profile by ID
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;

    const query = `
        SELECT profiles.*, profile_details.contact, profile_details.interests
        FROM profiles
        LEFT JOIN profile_details ON profiles.id = profile_details.profile_id
        WHERE profiles.id = ?
    `;

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching profile details:', err);
            res.status(500).send('Error fetching profile details');
        } else if (results.length === 0) {
            res.status(404).send('Profile not found');
        } else {
            res.json(results[0]);
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
