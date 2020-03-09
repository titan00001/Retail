const express = require('express');
const bodyParser = require('body-parser');

const client = require('./public/client.js');

var app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');



app.use('/', client);


app.listen(3000, (req, res, err) => {
    if(!err)
        console.log('Successfully listening to port 3000');
})