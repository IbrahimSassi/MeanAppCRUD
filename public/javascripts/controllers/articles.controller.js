angular.module('KnowledgeBase')

.controller('articlesCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/articles').success(function (data) {
        $scope.articles = data;
    })
}])



.controller('articleCategoryCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('/articles/category/' + $routeParams.category).success(function (data) {
        $scope.cat_articles = data;
        $scope.category = $routeParams.category;
    });
}])


.controller('articleDetaislCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {
    $http.get('/articles/' + $routeParams.id).success(function (data) {
        $scope.article = data;
        $scope.date = moment(data.date, 'YYYY-MM-DDTHH:mm:ssZ').fromNow();

    });
    
    
    $scope.removeArticle = function(){
        
        $http.delete('/articles/'+$routeParams.id).success(function(data){
            console.log(data);
        });
        
        $location.path('/articles');
        
    };
    
    
    
    
}])




.controller('articleCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $http.get('/categories').success(function (data) {
        $scope.categories = data;
    });

    $scope.addArticle = function () {
        var data = {
            title: $scope.title
            , body: $scope.body
            , category: $scope.category
        };

        $http.post('/articles', data).success(function (data, status) {
            console.log(status);
        });
        $location.path('/articles');
    };


}])





.controller('articleEditCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $http.get('/categories').success(function (data) {
        $scope.categories = data;
    });

    $http.get('/articles/' + $routeParams.id).success(function (data) {
        $scope.article = data;
    });





    $scope.editArticle = function () {
        var data1 = {
            id : $routeParams.id
            , title:    $scope.article.title
            , body:     $scope.article.body
            , category: $scope.article.category
        };

        $http.put('/articles', data1).success(function (data1, status) {
            console.log(status);
        });
        
        $location.path('/categories');
    };


}])