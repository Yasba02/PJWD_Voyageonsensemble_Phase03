require('dotenv').config({ path: '.env' });
const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const mariadb = require('mariadb');
const axios = require('axios');
const commentRoute = require("../route/comment"); 

console.log('Database Config:', {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, 
});

// MariaDB connection setup
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    acquireTimeout: 30000,
  
});


// Test database connection
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to MariaDB!');
        connection.release();
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
})();

// Authentication middleware
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.redirect('/login.html');
}

// Routes

// Root route: Serve welcomepage.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Homepage route
router.get('/Homepage', (req, res) => {
    const userName = req.session.userName || 'Guest';
    res.render('Homepage', { articles: [], name: userName });
});





// User Registration
router.post('/SignIn.html', async (req, res) => {
    const { email, password, name } = req.body;
    const lowercasedEmail = email.trim().toLowerCase();

    try {
        const apiKey = '527b0da29ba94db5b76d05fbb1c001a8';
        const response = await axios.get(
            `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${lowercasedEmail}`
        );

        const { is_valid_format, is_mx_found, is_smtp_valid } = response.data;

        if (!is_valid_format.value || !is_mx_found.value || !is_smtp_valid.value) {
            return res.status(400).json({ error: 'Invalid or non-existent email address' });
        }

        const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [lowercasedEmail]);

        if (existingUser) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', 
                                         [name, lowercasedEmail, hashedPassword]);

        req.session.userId = result.insertId.toString();
        req.session.userName = name;

        res.redirect('/Homepage');
    } catch (err) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

// User Login
router.post('/login.html', async (req, res) => {
    const { email, password } = req.body;
    const lowercasedEmail = email.trim().toLowerCase();

    try {
        const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [lowercasedEmail]);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            req.session.userId = user.id;
            req.session.userName = user.name;
            res.redirect('/Homepage');
        } else {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Login failed' });
    }
});


// User Logout
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Failed to log out');
        }
        res.redirect('/index.html');
    });
});

// Render static pages
const staticPages = ['Aboutus', 'contactus', 'publish', 'destinations', 'africa', 'america', 'asia', 'europe', 'oceania'];
staticPages.forEach(page => {
    router.get(`/${page}.html`, (req, res) => {
        res.sendFile(path.join(__dirname, `../${page}.html`));
    });
});

// Export the router
module.exports = router;


router.get('/Algiersarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Algiersarticle.html')); 
});
router.get('/Australiaarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Australiaarticle.html')); 
});
router.get('/Baliarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Baliarticle.html')); 
});
router.get('/Californiaarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Californiaarticle.html'));
});
router.get('/Dubaiarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Dubaiarticle.html')); 
});
router.get('/Egyptarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Egyptarticle.html')); 
});
router.get('/Hikingarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Hikingarticle.html')); 
});
router.get('/Japanarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Japanarticle.html')); 
});
router.get('/Maldivesarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Maldivesarticle.html')); 
});
router.get('/Moroccoarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Moroccoarticle.html')); 
});
router.get('/Milanoarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Milanoarticle.html')); 
});
router.get('/Newyorkarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Newyorkarticle.html')); 
});
router.get('/Niagarafallsarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Niagarafallsarticle.html')); 
});
router.get('/Parisarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Parisarticle.html')); 
});
router.get('/Safariarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Safariarticle.html')); 
});
router.get('/Switzerlandarticle.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Switzerlandarticle.html')); 
});
router.get('/Aboutus.Signin.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Aboutus.Signin.html')); 
});
router.get('/contactUs.Signin.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../contactUs.Signin.html')); 
});
router.get('/Homepage.Signin.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Homepage.Signin.html')); 
});
router.get('/Publish.Signin.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Publish.Signin.html')); 
});
router.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Route for Login page
router.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html')); 
});

// Route for Sign In page
router.get('/SignIn.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../SignIn.html')); 
});

// route to post and store comments of each article using postId

router.post('/:postId', async (req, res) => {
    const { postId } = req.params;
    const { userName, comment } = req.body;

    if (!userName || !comment) {
        return res.status(400).send('All fields are required');
    }

    try {
        const result = await pool.query(
            'INSERT INTO comments (postId, userName, comment) VALUES (?, ?, ?)',
            [postId, userName, comment]
        );

        console.log('Query Result:', result); 

        if (result.affectedRows === 1) {
            console.log('Comment posted successfully');
            return res.redirect(`/${postId}.html`); // Redirect to article page
        } else {
            throw new Error('Comment insertion failed');
        }
    } catch (err) {
        console.error('Error posting comment:', err.message);
        return res.status(500).send('Error posting comment');
    }
});

//route to fetch comments from a specific article using postId

router.get('/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const comments = await pool.query(
            'SELECT * FROM comments WHERE postId = ? ORDER BY created_at DESC',
            [postId]
        );

        console.log('Fetched Comments:', comments); 
        res.json(comments); // Send comments as JSON
    } catch (err) {
        console.error('Error fetching comments:', err.message);
        res.status(500).send('Error fetching comments');
    }
});




