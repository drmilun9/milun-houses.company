
app.service("myService", ["$http" , "$q",   function($http , $q ){
         
    return {

		   getData: function() {

		     var deferred = $q.defer();

		     $http.get("wp-json/wp/v2/posts/?per_page=20")

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

