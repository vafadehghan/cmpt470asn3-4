var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "asn3-4-db",
  user: "TESTUSER",
  password: "cmpt470",
  database: "cmpt470",
  port : "3306"
});

/* GET home page. */
router.get('/', function (req, res, next) {
  con.connect(function (err) {
    if (err) {
      return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
  });

  res.render('index');
});

module.exports = router;
