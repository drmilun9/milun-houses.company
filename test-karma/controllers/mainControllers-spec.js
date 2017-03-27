/*
describe("mainController", function(){

   beforeEach(module("site"));

      var scope= {};
      var ctrl;
      var $httpBackend;

      beforeEach(inject(function($controller, $injector){
        //$httpBackend.whenGET('wp-json/wp/v2/posts/?per_page=20').respond(200,{});
          ctrl = $controller("mainController", {$scope:scope});
          $httpBackend = $injector.get('$httpBackend');
      }));


     
     describe("about message", function(){

      it("should be explanation about nany", function(){
          expect(scope.message).toBeDefined();
          expect(scope.message).toBe("gagi");
       });


    //it('should fetch authentication toke', function() {
         
       
    //     $httpBackend.flush();
    //   });

   });  
  
     
});
*/
describe("test", function () {
    // Declare some variables required for my test
    var controller, scope, myService;

    // load in module
    beforeEach(module("site"));


    beforeEach(inject(function ($rootScope, $controller, _$q_, _myService_) {
        myService = _myService_;
        var deferred = _$q_.defer();
        deferred.resolve('data');
        spyOn(myService, 'getData').and.returnValue(deferred.promise);

        scope = $rootScope.$new();
        controller = $controller('mainController', {
            '$scope': scope
        });
    }));
    

    it('should assign data to scope', function() {
        //spyOn(myService, 'getAll').and.callFake(function() {

        //});
        console.log(scope.data); 
        //scope.data;
        //scope.$apply();
        //expect(scope.data).toBe('getData');
        expect(scope.data).toBeDefined();
        //expect(myService.getAll).toHaveBeenCalledWith('dashboard', 'currentnews', null, null, null);

    });

});