jQuery(document).ready(function($) {
  // Change swatch
  $('.swatch :radio').change(function() {
    var optionIndex = $(this).closest('.swatch').attr('data-option-index');
    var optionValue = $(this).val();
    var productForm = $(this).closest('form');
    $(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
  });
});