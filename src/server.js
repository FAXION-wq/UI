const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const data = [
    { No: 1, nombre: 'Felipe' },
    { No: 2, nombre: 'Stiven' },
    { No: 3, nombre: 'Jose' },
];

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log('servidor iniciado en puerto 5000');
});