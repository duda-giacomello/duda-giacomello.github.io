(function($) {
    $(".btn-menu").click(function() {
        $(".menu").addClass("expanded");
    })

    $(".btn-close-menu").click(function() {
        $(".menu").removeClass("expanded");
    })
})(jQuery);