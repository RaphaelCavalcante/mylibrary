angular.module('searchBook').controller('searchBookController',['$scope',
'$routeParams','Book', '$window',
function( $scope, $routeParams, Book, $window){
    $scope.search = function($data, $option){
        switch($option){
            case "byTitle":
                $scope.books = Book.find(      
                        {
                            filter:{
                                where:{
                                    title:{
                                        inq:[$data]
                                    }
                                }
                            }
                        }
                    );
            break;
            case "byAuthor":
                $scope.books = Book.find(      
                        {
                            filter:{
                                where:{
                                    author:{
                                        inq:[$data]
                                    }
                                }
                            }
                        }
                    );
            break;
            case "byDesc":
                $scope.books = Book.find(      
                    {
                        filter:{
                            where:{
                                description:{
                                    inq:[$data]
                                }
                            }
                        }
                    }
                );
            break;
            default:
                $scope.books = Book.find();
            break;
        };
    };
    $scope.delete = function($data){
        Book.deleteById({id:$data.id});
        return $scope.search();
    };
    $scope.edit = function($data){
        $window.location.href="#!/edit-book/"+$data.id;
    };
}]);