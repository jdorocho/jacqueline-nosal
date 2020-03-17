// Typed.js by www.mattboldt.com 
const typed = new Typed('#helloThere', {
    strings: ["Hello there! Scroll down to learn more."],
    typeSpeed: 65
});

// "Jacqui" animation in header from Wes Bos' JavaScript 30 
const mainHeader = document.querySelector('.mainHeader');
const text = mainHeader.querySelector('h1');
const walk = 350; 

function shadow(e) {
    // const width = mainHeader.offsetWidth;
    // const height = mainHeader.offsetHeight; 
    const {offsetWidth: width, offsetHeight: height} = mainHeader; // Destructured version

    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop; 
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = ` 
        ${xWalk}px ${yWalk}px 0 rgba(218, 159, 147, 0.6), 
        ${xWalk * -1}px ${yWalk}px 0 rgba(250, 235, 215, 0.6), 
        ${yWalk}px ${xWalk * -1}px 0 rgba(226, 188, 179, 0.6),
        ${yWalk * -1}px ${xWalk}px 0 rgba(159, 129, 112, 0.6)
    `;
}

mainHeader.addEventListener('mousemove', shadow);

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