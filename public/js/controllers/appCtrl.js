angular.module('InphinityN1').controller("appCtrl", function($scope){
    
    $scope.silverPackage = false;
    $scope.goldPackage = false;
    $scope.diamondPackage = false;
    
    $scope.silver = function(){
        $scope.silverPackage = !$scope.silverPackage;
    }
    $scope.gold = function(){
        $scope.goldPackage = !$scope.goldPackage;
    }
    $scope.diamond = function(){
        $scope.diamondPackage = !$scope.diamondPackage;
    }
})