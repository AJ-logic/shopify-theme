jQuery(document).ready(function($) {

  // Change swatch
  $('.swatch :radio').change(function() {
    var optionIndex = $(this).closest('.swatch').attr('data-option-index');
    var optionValue = $(this).val();
    var productForm = $(this).closest('form');
    $(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
  });

  var body = $('body');

  $('#navToggleWrap').on('click', function() {
    if(body.hasClass('is-active-menu')) {
      body.removeClass('is-active-menu');
      $('#navToggle').removeClass('menu-open');
    } else {
      body.addClass('is-active-menu');
      $('#navToggle').addClass('menu-open');
    }
  });
});