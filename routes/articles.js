var express = require('express');
var router = express.Router();

var Article = require('../models/articles');


router.get('/', function (req, res, next) {

    Article.getArticles(function (err, articles) {
        if (err) {
            console.log(err);
        }
        res.json(articles);
    })


});



router.get('/:id', function (req, res, next) {
    Article.getArticleById(req.params.id, function (err, article) {
        if (err) {
            console.log(err);
        }
        res.json(article);
    })
});


router.get('/category/:name', function (req, res, next) {
    Article.getArticleByCategory(req.params.name, function (err, article) {
        if (err) {
            console.log(err);
        }
        res.json(article);
    })
});




router.post('/', function (req, res, next) {

    //Get Form Values
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    //Article Object
    var newArticle = new Article({
        title: title
        , body: body
        , category: category
    });


    //CreateArticle

    Article.createArticle(newArticle, function (err, article) {
        if (err) {
            console.log(err);
        }

        res.location('/articles');
        res.redirect('/articles');

    });

});



//Update Article 

router.put('/', function (req, res, next) {
    var id = req.body.id;
    var data = {
        title: req.body.title
        , body: req.body.category
        , category: req.body.category
    };

    //update

    Article.updateArticle(id, data, function (err, article) {
        if (err) {
            console.log(err);

        }

        res.location('/articles');
        res.redirect('/articles');
    });

});



//Detele Article
router.delete('/:id', function (req, res, next) {
    var id = req.params.id;



    //delete

    Article.removeArticle(id, function (err, article) {
        if (err) {
            console.log(err);

        }

        res.location('/articles');
        res.redirect('/articles');
    });

});









module.exports = router;