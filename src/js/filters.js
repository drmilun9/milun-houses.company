app.filter('mainFilter', function() {
 
         
       return function(listings, priceInfoMin, priceInfoMax,price) {
            
            
                        
             //return helloFilter(currentPage);
               
              var filtered = [];

          
            
            var price = price;
            var priceInfoMin = priceInfoMin;
            var priceInfoMax = priceInfoMax; 
             
           // console.log("min "+priceInfoMin); 
           // console.log("max "+priceInfoMax);


            angular.forEach(listings, function(listing) {
              
          
                     
                if (listing.acf.price >= priceInfoMin && listing.acf.price <= priceInfoMax) {

                filtered.push(listing);
               }
                 
                //}         
                   
                 
                        
                
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
/*app.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});
*/


app.filter('toTrusted', ['$sce', function($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

app.filter('hello',  function() {
        return function(currentPage) {

            
            if (isNaN(currentPage)){
                var currentPage = 2;
                return currentPage;
                console.log(currentPage);
            }else{
                var currentPage = 2;
                return currentPage;
                console.log(currentPage);
            }
            

        };
});

