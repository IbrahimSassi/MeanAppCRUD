var express = require('express');
var router = express.Router();

var Category = require('../models/categories');


router.get('/', function(req, res, next) {

    Category.getCategories(function(err,Categories){
        if(err){
            console.log(err);
        }
        res.json(Categories);    
    })


});



router.get('/:id', function(req, res, next) {
    Category.getCategoryById(req.params.id,function(err,Category){
        if(err){
            console.log(err);
        }
        res.json(Category);    
    })
});


module.exports = router;
