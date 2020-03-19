$(function() {
    console.log("Hi there! Thanks for taking the time to visit my site. :) I hope you have a wonderful day, and I look forward to connecting with you soon! - Jacqui");

    // smooth scroll 
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

    // Tilt.js effect on project images 
    const tilt = $('.codeMain__tilt').tilt();
    tilt.on('change', callback); 
    tilt.on('tilt.mouseLeave', callback); 
    tilt.on('tilt.mouseEnter', callback); 
});

// AOS (Animate On Scroll)
AOS.init();
AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    
    offset: 120, 
    delay: 0, 
    duration: 400, 
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
});