(function ($) {
    $(function () {


        $('.sidenav').sidenav();
        $('.parallax').parallax();
        var instance = M.Carousel.init({
            fullWidth: true,
            indicators: true
        });


        $('.carousel').carousel();
        window.onload = function () {
            window.setInterval(function () {
                $('.carousel').carousel('next');
            }, 3000);
        }


        $('select').formSelect();
        $('.materialboxed').materialbox();
        $('.tabs').tabs();

    }); // end of document ready
})(jQuery); // end of jQuery name space
