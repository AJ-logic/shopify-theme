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

    $('#productSlider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      customPaging: function(slider, i) {
        var bg =  $(slider.$slides[i]).css('background-image');
        // bg = bg.replace('url(','').replace(')','');
        return '<div class="productSlider__thumb" style="background-image:' + bg + '"></div>';
      },
    });

    $('#productSliderThumbs').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: false,
      cssEase: 'linear',
      arrows: false,
      vertical: true,
      slidesToShow: 2
    });
});