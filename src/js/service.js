
app.service("myService", ["$http" , "$q",   function($http , $q ){
         
          var deffered = $q.defer();

          $http.get("wp-json/wp/v2/posts/?per_page=20").then(function(data){

          	deffered.resolve(data);
          
          });

          this.getData = function(){

          	return deffered.promise;
          }
	}]);
