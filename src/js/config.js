app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	
	$routeProvider
	.when('/', {
		templateUrl: 'wp-content/themes/ang-free-tut/src/partials/main.html',
		controller: 'mainController'
	})
    .when('/', {
   		templateUrl: "wp-content/themes/ang-free-tut/src/partials/main.html",
   		controller: 'Content'
   	})
	
	.otherwise({
		redirectTo: '/'
	});
}]);  