var express = require('express');
var router = express.Router();

var exchangeRates = { 'EUR': 0.94, 'JPY' : 112.86, 'USA' : 1.00 };

/* handle GET request for homepage*/
router.get('/', function(req, res){
    // res.send('Currency Site');
    res.render('index');
});

// handle currency form submit
// router.get('/', function(req, res) {
//     res.render('index');

router.get('/convert', function(req, res) {
    var amount = req.query.baseCurrency_amount;
    var convertTo = req.query.to_currency;
    var convertFrom = req.query.from_currency;
    //res.send ('to do: convert..)
    var baseToDollarsRate = exchangeRates[convertFrom];
    var amountOfDollars = amount/baseToDollarsRate;
    var dollarsToTargetRate = exchangeRates[convertTo];
    result = dollarsToTargetRate * amountOfDollars;

    res.render('results', { dollars : amount, result : result, toCurrency: convertTo})
});

module.exports = router;