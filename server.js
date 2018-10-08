const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS engine
app.set('view engine', 'hbs'); 
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', (req, res) => {
    //res.send('¡Hola, mundo!');
    /*let salida = {
        nombre: 'Carlos',
        edad: 32,
        url: req.url
    }*/
    res.render('home', {
        nombre: 'caRLos'
    });
});

app.get('/about', (req, res) => {
    //res.send('¡Hola, data!');
    res.render('about');
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});