  $(document).ready(function(){

             $("searchButton").on("click", function() {

                //var searchString = $("searchString");
                var searchString = "clinton";
                var begin_date = "20160512";
                //var begin_date = "2016";
                var end_date = "20170513";
                //var end_date = "2017";
                var APIKey = "0a6e80cbee064803a7aed32dceb2845b";

                //API QUERY - https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0a6e80cbee064803a7aed32dceb2845b&q=clinton&begin_date=20160512&end_date=20170513

                var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
                url += '?' + $.param({
                'api-key': APIKey,
                'q': searchString,
                  'begin_date': begin_date,
                  'end_date': end_date,
                  });

                console.log(url);

                $.ajax({
                  url: url,
                  method: 'GET',
                }).done(function(result) {
                  console.log(result);
                  //get the number of records to be displayed
                  var numRecords = $("numRecords");
                  //loop through the response till the # of records
                  for(var i=0; i<results[numRecords]; i++){
                      var resultDiv = $("<div>");
                      
                      = result.docs.headline.print_headline
                  //}    
                }).fail(function(err) {
                  throw err;
                });

             });

         });