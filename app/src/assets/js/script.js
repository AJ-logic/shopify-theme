jQuery(document).ready(function($) {
    $('select').selectric({
        maxHeight: 200
    });

    $('#search-toggle').on('click', function() {
        if(!$('.site-header__search-form--active').hasClass('site-header__search-form--active')) {
            $('.site-header__search-form').addClass('site-header__search-form--active');
            $('.site-header__search-toggle-icon').toggleClass('site-header__search-toggle-icon--active');
            $('#search-toggle').addClass('active');
        } else {
            $('.site-header__search-form').removeClass('site-header__search-form--active');
            $('.site-header__search-toggle-icon').toggleClass('site-header__search-toggle-icon--active');
            $('#search-toggle').removeClass('active');
        }
    });


  $('.swatch :radio').change(function() {
    var optionIndex = $(this).closest('.swatch').attr('data-option-index');
    console.log(optionIndex);
    var optionValue = $(this).val();
    console.log(optionValue);

    var productForm = $(this).closest('form');
    console.log(
    $(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change')
      );
  });


});