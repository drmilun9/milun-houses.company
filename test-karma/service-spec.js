describe('http', function() {

  beforeEach(module('site'));

  var myService;
  var $httpBackend;

  beforeEach(inject(function(_myService_, _$httpBackend_) {
    myService = _myService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('when sending data', function() {
    beforeEach(function() {
      $httpBackend.expectGET("wp-json/wp/v2/posts/?per_page=20")
      .respond(200, {});

      //myService.sendMessage();
      $httpBackend.flush();
    });

    it('should send an HTTP GET request', function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});