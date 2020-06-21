var app = angular.module('mainApp',[]);

app.controller('mainCtrl', function($scope){
  $scope.tasks = [];
  var taskData = localStorage['taskList'];
  //get from localStorage
  if(taskData !=  null){
    $scope.tasks = JSON.parse(taskData);
  }
  $scope.searchEnter = function(){
    if(event.which  == 13 && $scope.task != undefined){
      $scope.addTask();
    }
    return false;
  }

  $scope.addTask= function(){
      $scope.tasks.push({'taskMessage':$scope.task,'status': false});
      console.log($scope.tasks);
      $scope.task = undefined;
      //Add to localStorage
      localStorage['taskList'] = JSON.stringify($scope.tasks);
  }

  $scope.contentEdit = function(x){
    console.log($scope.tasks);
    //getting the index of updated task
    for(i=0;i<$scope.tasks.length;i++){
      if($scope.tasks[i].taskMessage == x){
        console.log("here");
        $scope.tasks[i].taskMessage = event.target.innerText;
      }
    }
    console.log($scope.tasks);
    //Update to localStorage
    localStorage['taskList'] = JSON.stringify($scope.tasks);
    event.target.contentEditable = event.target.contentEditable == "true" ? "false" : "true";

  }

  $scope.enterAgain = function(t){
    if(event.which  == 13 && t != undefined){
      $scope.contentEdit(t);
    }
  }
})