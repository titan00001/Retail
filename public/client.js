const express = require('express');

var Router = express.Router();


var inputRowNum = 1, outputRowNum = 1;


Router.get('/', function(req, res) {

    res.render('pages/input', {row : inputRowNum});
});

Router.get('/output', function(req, res) {

    res.render('pages/output', {row : outputRowNum});
});

Router.get('/view', function(req, res) {

    res.render('pages/currentInventory');
});


// =============================================================== Add Row ===================================================== 
Router.get('/addInputRow', function(req, res) {

    ++ inputRowNum;
    res.redirect('/');
});

Router.get('/addOutputRow', function(req, res) {

    ++ outputRowNum;
    res.redirect('/output');
});

// ============================================================= Post Data ================================================

Router.post('/input', (req, res) => {

    console.log(req.body);
    res.redirect('/input');
})

Router.post('/output', (req, res) => {

    console.log(req.body);
    res.redirect('/output');
})

module.exports = Router;