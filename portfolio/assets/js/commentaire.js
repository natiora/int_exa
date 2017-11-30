var app = angular.module("commentaire", []); 
app.controller("myCtrl", function($scope) {
    $scope.comms = ["Veuiller mettre quelque chose"];
    $scope.addItem = function () {
        $scope.comms.push($scope.addMe);
    }    
    $scope.removeItem = function (x) {
        $scope.comms.splice(x, 1);
    }
});