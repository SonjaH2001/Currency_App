var express = require('express');
var router = express.Router();

var exchangeRates = { 'EUR': 0.94, 'JPY' : 112.86};

/* handle GET request for homepage*/
router.get('/', function(req, res){
    // res.send('Currency Site');
    res.render('index');
});

// handle currency form submit
// router.get('/', function(req, res) {
//     res.render('index');

router.get('/convert', function(req, res) {
    var dollars = req.query.dollar_amount;
    var convertTo = req.query.to_currency;
    //res.send ('to do: convert..)
    var rate = exchangeRates[convertTo];
    result = dollars * rate;

    res.send('$' + dollars + ' is ' + result + convertTo)
});

module.exports = router;