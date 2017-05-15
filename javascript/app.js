  $(document).ready(function(){

// var searchFor = ""

// var searchFor = $("#searchTerm").val().trim();
// var startDate = $("#startYear").val().trim();
// var endDate = $("#endYear").val().trim();





$("#run-search").on("click", function() {



var searchFor = $("#searchTerm").val().trim();
var startDate = $("#startYear").val().trim();
var endDate = $("#endYear").val().trim();


var newUrl = urlBase+ "&q=" + searchFor

console.log(newUrl)



apiCall(urlBase+ "&q=" + searchFor)

return false;

 
// var url = data.response.docs[0].web_url;
// $("#headline").html(headline);
// $("#author").html(author);
// // $("#date").html(pubDate);
// $("#link").html(url);




});


var urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0a6e80cbee064803a7aed32dceb2845b"


var query = "&q=kobe"

// var dates = "&begin_date=20160512&end_date=20170513"


function apiCall(url) {

$.ajax({
  url: url,
  method: "GET"
}).done(function(data){
  console.log(data)
        var headline = data.response.docs[0].headline.main;
        // var author = data.response.docs[0].byline.original;
        var pubDate = data.response.docs[0].pub_date;
         var articleUrl = data.response.docs[0].web_url;
                 

                  $("#headline").html(headline);
                  // $("#author").html(author);
                  $("#date").html(pubDate);
                  $("#link").html(articleUrl);
})

}

// apiCall();



});