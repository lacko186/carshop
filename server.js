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

const Scema = {
    id: Number,
    brand: String,
    model: String,
    year: Number,
    price: Number
};

let Products = 
[
    {
        id: 1,
        brand: 'Toyota',
        model: 'Corolla',
        year: 2020,
        price: 20000
    },
    {
        id: 2,
        brand: 'Honda',
        model: 'Civic',
        year: 2019,
        price: 22000
    },
    {
        id: 3,
        brand: 'Ford',
        model: 'Focus',
        year: 2021,
        price: 25000
    },
    {
        id: 4,
        brand: 'Chevrolet',
        model: 'Malibu',
        year: 2018,
        price: 18000
    }
];

// api/cars végpont

app.get('/api/cars', (req, res) => {
    res.json(Products);
});

//végpont futtatás
app.listen(port, () => {
    console.log(`Szerver fut a http://localhost:${port} címen`);
});