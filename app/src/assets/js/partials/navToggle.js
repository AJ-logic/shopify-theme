jQuery(document).ready(function($) {

  var body = $('body');

  // navtoggle
  $('#navToggleWrap').on('click', function() {
    if(body.hasClass('is-active-menu')) {
      body.removeClass('is-active-menu');
      $('#navToggle').removeClass('menu-open');
    } else {
      body.addClass('is-active-menu');
      $('#navToggle').addClass('menu-open');
    }
  });

  // selectric
  $('.shippingCalculator__select').selectric();
});