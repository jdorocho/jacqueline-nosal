$(function() {
    console.log("Hi there! Thanks for taking the time to visit my site. :) I hope you have a wonderful day, and I look forward to connecting with you soon! - Jacqui");

    const tilt = $('.codeMain__tilt').tilt();

    // smooth scroll https://github.com/kswedberg/jquery-smooth-scroll 
    $('a').smoothScroll({
        speed: 700
    });

    // hamburger dropdown
    $('.topNav__hamburger').click(function() {
        $('.topNav__dropdown').slideDown('slow'); 
        $('.topNav__hamburger').removeClass('show');
        $('.topNav__exit').addClass('show');
    });

    $('.topNav__exit').click(function() {
        $('.topNav__dropdown').slideUp('slow');
        $('.topNav__exit').removeClass('show');
        $('.topNav__hamburger').addClass('show');
    });

    // Tilt effect on project images 
    tilt.on('change', callback);  // parameters: event, transforms
    tilt.on('tilt.mouseLeave', callback); // parameters: event
    tilt.on('tilt.mouseEnter', callback); // parameters: event
});