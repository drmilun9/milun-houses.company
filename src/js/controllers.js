app.controller("mainController", ['$scope', '$http', '$routeParams',"filterFilter","$route",
 function($scope, $http, $routeParams, filterFilter, $route) {
 $http.get('wp-json/wp/v2/posts/?per_page=20').success(function(res){
        $scope.data = res;

      
  


    $scope.reset = function(){window.location.reload();}
   


   $scope.priceInfoMin = 0;
   $scope.priceInfoMax = 10000000; 

// pagination controls
  $scope.currentPage = 1;
  $scope.totalItems = $scope.data.length;
  $scope.entryLimit = 3; // items per page
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);




$scope.dataa = ['priceInfoMin', 'priceInfoMax', 'searchBy'];
$scope.$watchGroup('dataa', function (newVal, oldVal) {
  console.log("min "+ $scope.dataa.priceInfoMin);
    $scope.filtered =  filterFilter($scope.data, newVal);
    $scope.totalItems = $scope.filtered.length;
   
    console.log("total items from pagination "+ $scope.totalItems);
    
   //$scope.maxSize = 2; //Number of pager buttons to show
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
  console.log("entry limit "+$scope.entryLimit);

  console.log("number of pages "+ $scope.noOfPages);
    $scope.currentPage = 1;
  }, true);  

});  


 
//for slick slider
//$scope.box3 = false;

$scope.breakpoints = [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
];

}]);



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
 


app.controller("expCtrl", ["$scope", function($scope){
    
    $scope.message = "nany"; 
}]); 