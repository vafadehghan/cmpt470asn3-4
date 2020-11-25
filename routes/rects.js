var express = require('express');
var router = express.Router();
const { createCanvas, loadImage } = require('canvas')

var rectModel = require('../model/rectModel');

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
});

router.get('/update/:id', function (req, res, next) {
  console.log("UPDATE");
  rectModel.getOne(req.params.id, function (result) {
    var singleRect = result;
    console.log(singleRect);
    res.render("updateView", { rect: singleRect });
  });

})

router.post('/update/:id', rectModel.update);

router.get('/delete/:id', rectModel.delete);

router.post("/add", rectModel.save);

router.get("/view", function (req, res, next) {
  rectModel.getAll(function (result) {
    var allRects = result;
    // console.log(allRects);
    res.render("rectsView", { rects: allRects });
    // res.status(200).end();
  });
});

module.exports = router;
