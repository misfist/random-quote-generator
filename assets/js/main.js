$(document).ready(function() {

    console.log('main.js');

    $('#quote').find('blockquote').hide();

    $('#quote-button').click(function() {

        console.log('clicked');

        $.ajax({
            url: 'data/quotes',
        })
        .success(function(data, x) {
            var quotes = data[0].quotes;
            var length = quotes.length;
            var random = Math.floor( Math.random() * length );

            $('#quote').find('blockquote').show();
            $('#quote').find('blockquote').html(quotes[random]);

            console.log('random', random);
        });

    });

});

