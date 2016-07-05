angular.module('KnowledgeBase')

.controller('categoriesCtrl',['$scope','$http',function($scope,$http){
    $http.get('/categories').success(function(data){
        $scope.categories = data;
    });
}])



