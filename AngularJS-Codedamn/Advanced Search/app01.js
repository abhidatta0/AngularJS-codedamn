var app = angular.module('mainApp',[]);
app.controller('people', function($scope, $http){
    $http.get('database.json')
    .then(function(response){
        console.log(response);
       $scope.persons = response.data.records;
    })

})