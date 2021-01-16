const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require ('method-override')

let rutaIndex = require('./routes/main');
let rutaDetail = require('./routes/detail');

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', rutaIndex);
app.use('/editar', rutaDetail);

app.listen(process.env.PORT || 3000, function () {
    console.log('Server running at http://localhost:3000/')
})