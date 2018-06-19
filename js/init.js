(function($){
  $(function(){


    $('.sidenav').sidenav();
    $('.parallax').parallax();
    var instance = M.Carousel.init({
      fullWidth: true,
      indicators: true
    });

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

    $('select').formSelect();
    $('.materialboxed').materialbox();
    $('.tabs').tabs();

  }); // end of document ready
})(jQuery); // end of jQuery name space
