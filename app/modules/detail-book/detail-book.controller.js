angular.module('detailBook').controller('detailBookController',['$scope', '$routeParams', '$window', 'Book',
function($scope, $routeParams, $window, Book){
    $scope.book = Book.findById($routeParams);
}]);