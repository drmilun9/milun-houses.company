//Content controller FOR SLIDER
app.controller('Content', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http, $stateParams) {
  $http.get('wp-json/wp/v2/posts?filter[name]=' + $routeParams.slug).success(function(res){
    $scope.post = res[0];
    document.querySelector('title').innerHTML = res.title + ' | AngularJS Demo Theme';


     });
    $http.get('wp-json/wp/v2/media?filter[post_parent]=' + $routeParams.slug).success(function(res){
      //if ( res.length > 1 ) {
        $scope.media = res;
      //}
    });
    $http.get('wp-json/wp/v2/posts/?filter[name]=' + $routeParams.slug).success(function(res){
    $scope.posts = res;
    
    }); 

}]);