app.controller("mainController", ['$scope','$routeParams',"filterFilter","$route","myService",
 function($scope, $routeParams, filterFilter, $route, myService) {
    


  var promise = myService.getData();

  promise.then(function(data){  
  

  $scope.data = data;


  //FOR BOOTSTRAP MODAL .....SINGLE HOUSE
  $scope.house = {};
  $scope.selectHouse = function(index){
  
    $scope.house = index;
  }  




  $scope.reset = function(){window.location.reload();}
   


   $scope.priceInfoMin = 0;
   $scope.priceInfoMax = 10000000;



  //FOR PAGINATION
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



//FOR SLIDER
$scope.breakpoints = [
   {
    breakpoint: 1200,
    settings: {
      dots: false
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
       dots: false
    }
  }
];

}]);