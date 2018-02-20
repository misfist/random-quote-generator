$(document).ready(function() {

  var mainEl = $('#quote');
  var blockquoteEl = $('<blockquote>');
  var quoteEl = $( '<p class="quote-text">' );
  var citeEl = $( '<cite class="quote-author">' );
  var twitterButton = '<a id="tweet-link" class="btn tweet-this" target="_blank"><i class="fa fa-twitter"></i> Tweet This</a>';
  var twitterLink = 'https://twitter.com/home/?status=';
  var quote,
      markup,
      random;

    $('#quote-button').click(function() {

        $.ajax({
            url: "https://misfist.com/projects/wp-json/wp/v2/posts?categories=2",
            jsonp: "jsonp",
            method: 'GET',
            success: function( data ) {

              random = Math.floor( Math.random() * data.length );
              quote = data[random];

              twitterLink = twitterLink + quote.content.rendered;
              markup = '<blockquote><p class="quote-text">' + quote.content.rendered + '</p><cite class="quote-author">Oscar the Grouch</cite>' + twitterButton + '</blockquote>';
              mainEl.html( markup );
              $( '#tweet-link' ).attr( 'href', twitterLink );
            }
        });

    });

});
