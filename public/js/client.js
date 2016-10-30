$(document).foundation();
$('.slick-carousel').slick({
	dots: true,
	infinite: true,
	centerMode: true,
	adaptiveHeight: true
});

var $animationBody = $('html, body');

// smooth scroll transition when clicking link
$(document).on('click', '.smoothAnchor', function(event) {
    event.preventDefault();
    var $href = $(this).attr('href');

    $animationBody.animate({
        scrollTop: $($href).offset().top - 50
    }, 500, function () {
        window.location.hash = $href;
    });
    return;
});