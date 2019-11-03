(function($) {
    $(".btn-menu").click(function() {
        $(".menu").addClass("expanded");
    })

    $(".btn-close-menu").click(function() {
        $(".menu").removeClass("expanded");
    })

    $('.depoimentos-slides').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
})(jQuery);