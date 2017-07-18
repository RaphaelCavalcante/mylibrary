angular.module('editBook').controller('EditBookController', 
['$scope', '$window', '$routeParams', 'Book',
 
 function($scope, $window, $routeParams, Book){
     $scope.state="edit";
     $scope.book = Book.findById($routeParams);
    
     $scope.save = function($data){
        $scope.book.title= $data.title;
        $scope.book.author= $data.author;
        $scope.book.description=$data.description;

        Book.updateAttributes($scope.book);
        $window.location.href="#!/";
     };
 }]);