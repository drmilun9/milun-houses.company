var app = angular.module("site", ["ngRoute",'ngSanitize',"slick", "ngSanitize","ui.bootstrap","ngAnimate"]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	
	$routeProvider
	.when('/', {
		templateUrl: 'wp-content/themes/ang-free-tut/src/partials/main.html',
		controller: 'mainController'
	})
    .when('/', {
   		templateUrl: "wp-content/themes/ang-free-tut/src/partials/main.html",
   		controller: 'sliderController'
   	})
	
	.otherwise({
		redirectTo: '/'
	});
}]);  

app.service("myService", ["$http" , "$q",   function($http , $q ){
         
    return {

		   getData: function() {

		     var deferred = $q.defer();

		     $http.get("wp-json/wp/v2/posts/?per_page=10")

		       .success(function(data) { 

		          deferred.resolve(data);

		       }).error(function(msg, code) {

		          deferred.reject(msg);

		          //$log.error(msg, code);

		       });

		     return deferred.promise;

		   }

  }

}]);


//FOR AJAX LOADER
app.controller("loadingController", ['$scope', '$timeout', function($scope, $timeout) {
    $scope.loaded = false;    
    $scope.title = "This is an App";

    $timeout(function() { $scope.loaded = true; }, 10000);
}]);  
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
//Content controller FOR SLIDER
app.controller('sliderController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http, $stateParams) {
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
app.filter('mainFilter', function() {
 
         
       return function(listings, priceInfoMin, priceInfoMax,price) {
            
            
            var filtered = [];

          
            
            var price = price;
            var priceInfoMin = priceInfoMin;
            var priceInfoMax = priceInfoMax; 


            angular.forEach(listings, function(listing) {
              
          
                     
             if (listing.acf.price >= priceInfoMin && listing.acf.price <= priceInfoMax) {

                filtered.push(listing);
               }
                 
                        
             });
             
            
           return filtered;    
          
         }
    });



app.filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
});



app.filter('toTrusted', ['$sce', function($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        };
}]);
