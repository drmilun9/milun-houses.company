describe("it should test main Filter", function(){
	describe("Testing mainFilter", function(){
       beforeEach(module("site"));
       
       var $filter;
       var listing = [];
        beforeEach(function () {
          module('site');

          inject(function (_$filter_) {
            $filter = _$filter_;
          });
        }); 


    it('should be not equal null', (function() { 
        expect($filter('mainFilter')).not.toBeNull();
    }));

    });
});