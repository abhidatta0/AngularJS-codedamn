var app = angular.module("mainApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        template:"Welcome User"
    })
    .when('/anotherPage',{
        template:'Welcome User, again'
    })
    .when('/helloUser',{
        templateUrl : 'user.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})