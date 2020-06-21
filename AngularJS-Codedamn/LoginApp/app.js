var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'login.html'
    })
    .when('/dashboard',{
        resolve:{
            "check": function($rootScope,$location){
                if(!$rootScope.isLoggedIn){
                    $location.path('/');
                }
            }
        },
        templateUrl: 'dashboard.html'
        
    })
    .otherwise({
        redirectTo:'/'
    })
})

app.controller('loginCtrl',function($scope,$location,$rootScope){
    $scope.submit = function(){
        if($scope.username == "admin" && $scope.password == "admin"){
            console.log($scope.username+" "+$scope.password);
            $rootScope.isLoggedIn = true;
            $location.path('/dashboard');
        }
        else{
            alert("Wrong Stuff");
        }
    }
})