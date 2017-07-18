angular.module('addBook').
controller('addNewBook', ['$scope','$routeParams', 'Book','$window',
function($scope, $routeParams,Book, $window){
    $scope.state="create";
    $scope.addBook= function($data){
        Book.create({
            title:$data.title,
            author:$data.author,
            description:$data.description
        }).$promise.then(function(){
            $window.location.href="/search-book";
        });
    };
}]);
