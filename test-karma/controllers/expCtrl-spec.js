/*
describe("expCtrl", function(){
	var $rootScope,
	    $scope,
	    controller;

	    beforeEach(function(){
	    	module("site");

	      	inject(function($injector){
              $rootScope = $injector.get($rootScope);
              $scope = $rootScope.new();
              controller = $injector.get("$controller")("expCtrl",{$scope: $scope});
	    	});
	    });

     
     describe("about message", function(){

     	it("should be explanation about nany", function(){
          expect($scope.message).toBeDefined();
          expect($scope.message).toBe("nany");

          
      });
    });

});
*/

describe("it should describe controller", function(){
	describe("Testing expCtrl", function(){
       beforeEach(module("site"));
        
      var scope= {};
      var ctrl;
      

      beforeEach(inject(function($controller){
          ctrl = $controller("expCtrl", {$scope:scope});
      }));
    
      it("should be explanation about nany", function(){
          expect(scope.message).toBeDefined();
          expect(scope.message).toBe("nany");

          
      });



    });
});
