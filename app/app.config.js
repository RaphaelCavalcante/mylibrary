angular.module('myLibrary',['ngRoute', 'lbServices', 'addBook','searchBook','editBook', 'detailBook'])
.config(['$locationProvider','$routeProvider',
 function($locationProvider, $routeProvider,$stateProvider){
    $routeProvider.when('/home',{
        templateUrl:'/views/welcome.html'
    }).when('/search-book',{
        templateUrl:'views/search-results.html',
        controller:'searchBookController'
    }).when('/create-book',{
        templateUrl:'views/create-book.html',
        controller:'addNewBook'
    }).when('/edit-book/:id',{
        templateUrl:'views/create-book.html',
        controller:'EditBookController',
        params:{id:0}
    }).when('/book-detail/:id',{
        templateUrl:'views/book-detail.html',
        controller:'detailBookController',
        params:{id:0}
    }).otherwise({redirectTo:'/home'});
 }]);