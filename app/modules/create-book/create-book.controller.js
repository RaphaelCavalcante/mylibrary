angular.module('addBook').
controller('addNewBook', ['$scope','$routeParams', 'Book','$window',
function($scope, $routeParams,Book, $window){
    $scope.state="create";
    $scope.addBook= function($data){
        console.log($data.title);
        console.log($data.author);
        console.log($data.desc);
        Book.create({
            author:$data.title,
            title:$data.author,
            description:$data.desc
        }).$promise.then(function(){
            $window.location.href="/";
        });
    };
}]);
