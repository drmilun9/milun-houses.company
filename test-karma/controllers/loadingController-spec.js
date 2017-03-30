describe('loadingController', function() {
  beforeEach(module('site'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('checking loadingController', function() {
    it('checking if loadingController is defined', function() {
      var $scope = {};
      var controller = $controller("loadingController", { $scope: $scope });
     
      expect(controller).toBeDefined();
    });
  });
});