$('a[href^="#"]').on('click', function(event) {

    // Add active class
    $('li').removeClass('active');
    $(this).closest('li').addClass('active');
 
    // Check if mobile menu is visible
    var pageOffset = ( $('.navbar-toggle').css('display') == 'none' ) ? (30) : (205);

    // Get target
    var target = $( $(this).attr('href') );

    //Move to target (-30)
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - pageOffset
        }, 800, 'swing');
    }

});