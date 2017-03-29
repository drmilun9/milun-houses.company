app.filter('mainFilter', function() {
 
         
       return function(listings, priceInfoMin, priceInfoMax,price) {
            
            
            var filtered = [];

          
            
            var price = price;
            var priceInfoMin = priceInfoMin;
            var priceInfoMax = priceInfoMax; 


            angular.forEach(listings, function(listing) {
              
          
                     
             if (listing.acf.price >= priceInfoMin && listing.acf.price <= priceInfoMax) {

                filtered.push(listing);
               }
                 
                        
             });
             
            
           return filtered;    
          
         }
    });



app.filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
});



app.filter('toTrusted', ['$sce', function($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        };
}]);
