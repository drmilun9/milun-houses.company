describe('sliderController', function() {
  beforeEach(module('site'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('checking sliderController', function() {
    it('checking if sliderController is defined', function() {
      var $scope = {};
      var controller = $controller("sliderController", { $scope: $scope });
     
      expect(controller).toBeDefined();
    });
  });
});