//express szerver + ejs
const express = require('express'); 
const cors = require('cors');
const ejs = require('ejs');
const app = express();
const port = 5000;

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index', { title: 'Car Shop Server' });
});

