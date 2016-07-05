var app = angular.module('KnowledgeBase', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/categories', {
            templateUrl: 'views/categories.view.html'
            , controller: 'categoriesCtrl'
        })
        .when('/articles', {
            templateUrl: 'views/articles.view.html'
            , controller: 'articlesCtrl'
        })
        .when('/article/details/:id', {
            templateUrl: 'views/article_details.view.html'
            , controller: 'articleDetaislCtrl'
        })
        .when('/articles/category/:category', {
            templateUrl: 'views/cat_articles.view.html'
            , controller: 'articleCategoryCtrl'
        })
    
        .when('/article/add', {
            templateUrl: 'views/add_article.view.html'
            , controller: 'articleCreateCtrl'
        })
        .when('/article/edit/:id', {
            templateUrl: 'views/edit_article.view.html'
            , controller: 'articleEditCtrl'
        })
    
    .otherwise({redirectTo:'/articles'})

}]);