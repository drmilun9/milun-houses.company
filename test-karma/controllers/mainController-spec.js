describe('mainController', function() {
  beforeEach(module('site'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('checking mainController', function() {
    it('checking if maincontroller is defined', function() {
      var $scope = {};
      var controller = $controller("mainController", { $scope: $scope });
     
      expect(controller).toBeDefined();
    });
  });
});