$(document).ready(function() {

    console.log('main.js');

    $('#quote-button').click(function() {

        console.log('clicked');

        $.ajax({
            url: "http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            data: {
                method: "getQuote",
                lang: "en",
                format: "jsonp"
            }
        })
        .success(function( data, x ) {
            console.log( 'success', data );

            // var quotes = data[0].quotes;
            // var length = quotes.length;
            // var random = Math.floor( Math.random() * length );

            $('#quote blockquote').remove();

            var mainEl = $('#quote');
            var blockquoteEl = $('<blockquote>');
            var quoteEl = $( '<p class="quote-text">' );
            var citeEl = $( '<cite class="quote-author">' );
            quoteEl.append( data.quoteText );

            if ( data.quoteAuthor ) {
                citeEl.append( data.quoteAuthor );
            }

            blockquoteEl.append( quoteEl );

            if ( data.quoteAuthor ) {
                blockquoteEl.append( citeEl );
            }
            
            mainEl.append( blockquoteEl );
            
        })
        .fail(function( data ) {
            console.log( 'fail', data );
        });

    });

});
