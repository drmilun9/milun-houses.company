describe("it should test main Filter", function(){
	describe("Testing expCtrl", function(){
       beforeEach(module("site"));
       
       var $filter;
       var listing = [];
        beforeEach(function () {
          module('site');

          inject(function (_$filter_) {
            $filter = _$filter_;
          });
        }); 



       //inject $filter to our test
    it('should be defined', (function() { 
        expect($filter('cribsFilter')).not.toBeNull();
    }));



    });
});