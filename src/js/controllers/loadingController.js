app.controller("loadingController", [ '$scope', '$timeout', function($scope, $timeout) {
    $scope.loaded = false;    
    $scope.title = "This is an App";

    $timeout(function() { $scope.loaded = true; }, 12000);
}]);  