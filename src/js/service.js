
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