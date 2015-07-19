jQuery(document).ready(function($) {

  // Change swatch
  $('.swatch :radio').change(function() {
    var optionIndex = $(this).closest('.swatch').attr('data-option-index');
    var optionValue = $(this).val();
    var productForm = $(this).closest('form');
    $(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
  });

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

  // FAQ
  $('.faqContent > h2').each(function() {
    $(this).nextUntil('h2').wrapAll('<div class="faqContent__answer"></div>');

    $(this).on('click', function() {
      // $('.faqContent__answer').removeClass('isActive');
      if(!$(this).next().hasClass('isActive')) {
        $(this).next().addClass('isActive');
      } else {
        $(this).next().removeClass('isActive');
      }
    });
  });
});