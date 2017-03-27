var app = angular.module("site", ["ngRoute","slick", "ngSanitize","ui.bootstrap","ngAnimate"]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('');
	$routeProvider
	.when('/', {
		templateUrl: 'wp-content/themes/ang-free-tut/src/partials/partials/main.html',
		controller: 'mainController'
	})
    .when('/', {
   		templateUrl: "wp-content/themes/ang-free-tut/src/partials/partials/main.html",
   		controller: 'Content'
   	})
	
	.otherwise({
		redirectTo: '/'
	});
}]);  

app.service("myService", ["$http" , "$q",   function($http , $q ){
         
    
   return {

		   getData: function() {

		     var deferred = $q.defer();

		     $http.get("wp-json/wp/v2/posts/?per_page=20")

		       .success(function(data) { 

		          deferred.resolve(data);

		       }).error(function(msg, code) {

		          deferred.reject(msg);

		          $log.error(msg, code);

		       });

		     return deferred.promise;

		   }

  }

}]);
/*
app.factory('myService', function ($q, $http) {
	var service = {};

	service.getData = function() {
    // We make use of Angular's $q library to create the deferred instance
		var deferred = $q.defer();

  	$http.get("wp-json/wp/v2/posts/?per_page=20")
    		.success(function(data) {
          // The promise is resolved once the HTTP call is successful.
      		deferred.resolve(data);
    		})
    		.error(function() {
          // The promise is rejected if there is an error with the HTTP call.
      		deferred.reject();
    		});

    // The promise is returned to the caller
  	return deferred.promise;
	};

	return service;
});

*/
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
app.controller("mainController", ['$scope','$routeParams',"filterFilter","$route","myService",
 function($scope, $routeParams, filterFilter, $route, myService) {
    



        
          


  var promise = myService.getData();

  promise.then(function(data){  
  
    

    $scope.data = data;  

    console.log($scope.data);


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



}]);

app.controller("mySlickController", ["$scope", function($scope){
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
app.filter('cribsFilter', function() {
 
         
       return function(listings, priceInfoMin, priceInfoMax,price) {
            
            
                        
             //return helloFilter(currentPage);
               
              var filtered = [];

          
            
            var price = price;
            var priceInfoMin = priceInfoMin;
            var priceInfoMax = priceInfoMax; 
             
           // console.log("min "+priceInfoMin); 
           // console.log("max "+priceInfoMax);


            angular.forEach(listings, function(listing) {
              
          
                     
                if (listing.acf.price >= priceInfoMin && listing.acf.price <= priceInfoMax) {

                filtered.push(listing);
               }
                 
                //}         
                   
                 
                        
                
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
/*app.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});
*/


app.filter('toTrusted', ['$sce', function($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

app.filter('hello',  function() {
        return function(currentPage) {

            
            if (isNaN(currentPage)){
                var currentPage = 2;
                return currentPage;
                console.log(currentPage);
            }else{
                var currentPage = 2;
                return currentPage;
                console.log(currentPage);
            }
            

        };
});

