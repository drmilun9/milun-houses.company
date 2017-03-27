describe('Testing remote call returning promise', function() {
  var myService;

  beforeEach(module('site'));

  beforeEach(inject( function(_myService_, $q, _$httpBackend_){
    $httpBackend = _$httpBackend_;
    myService = _myService_;
          spyOn( myService, "getData").and.callFake(function() {
              var deferred = $q.defer();
              deferred.resolve('Remote call result');
              return deferred.promise;
         $httpBackend.flush();

          });
          
  }));

        it('can do remote call', inject(function() {
          myService.getData()
            .then(function() {
              console.log('Success');
            });    
        }));


});