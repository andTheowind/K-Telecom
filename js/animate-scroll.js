$('.top-headline_btn').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});