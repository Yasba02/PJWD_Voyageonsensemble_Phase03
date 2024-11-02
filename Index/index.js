const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const routes = require('../route/route'); 
const commentRoute = require("../route/comment"); 

const app = express();
const port = 3000;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, '../public')));

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'Yas2024data@', 
    resave: false,
    saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); 
// Use routes

app.use('/', routes);



app.use('/comment', commentRoute); // Use comment routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
