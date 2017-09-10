/*Load quote upon page refresh/open*/
$("document").ready(function() {
  $(".new-quote").trigger("click");
});

//API//
$('.new-quote').click(function() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      var quote = response.quoteText.slice(0, -1);
      var len = response.quoteText.length;
      var autlen = response.quoteAuthor.length;
      if (len < 150){
      $("#quoteDisplay").html('"' +quote+ '"');
        if (autlen !== 0){
      $("#authorDisplay").html('-'+response.quoteAuthor);
      }
      }
    }
  });
});

//twitter//
function twitter() {
  var tweetQuote = $("#quoteDisplay").text();
  var tweet = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetQuote + " " + "#quotegenerator");
  window.open(tweet, '_blank');
}

$('.twitter-share-button').on('click', function() {
  twitter();
});
