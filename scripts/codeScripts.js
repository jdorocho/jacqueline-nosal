$(function() {
    console.log("Hi there! Thanks for taking the time to visit my site. :) I hope you have a wonderful day, and I look forward to connecting with you soon! - Jacqui");

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
});