require('./models/db');

const express = require('express');
const employeeController = require('./controllers/employeeController');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyparser = require('body-parser');  

var app = express();

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exhbs({extname :'hbs',defaultLayout:'mainlayout',layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine','hbs');


app.listen(3000, ()=>{
    console.log('Express Server started at defined port');
})

app.use('/employee',employeeController); 