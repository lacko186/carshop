//express szerver + ejs
const express = require('express'); 
const cors = require('cors');
const ejs = require('ejs');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));

//main root ami az indexre mutat
app.get('/', (req, res) => {
    res.render('index', { title: 'Car Shop Server' });
});

//végpont futtatás
app.listen(port, () => {
    console.log(`Szerver fut a http://localhost:${port} címen`);
});