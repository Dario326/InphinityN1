angular.module("InphinityN1").controller("musicCtrl", function($scope){
    
    $scope.silverPackage = false;
    $scope.goldPackage = false;
    $scope.diamondPackage = false;
    
    $scope.silver = function(){
        $scope.showSilverPackage = !$scope.showSilverPackage;
    }
    $scope.gold = function(){
        $scope.goldPackage = !$scope.goldPackage;
    }
    $scope.diamond = function(){
        $scope.diamondPackage = !$scope.diamondPackage;
    }
})