jQuery(document).ready(function($) {
  $('#productSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'ease',
    arrows: true,
    customPaging: function(slider, i) {
      var bg =  $(slider.$slides[i]).css('background-image');
      // bg = bg.replace('url(','').replace(')','');
      return '<div class="productSlider__thumb" style="background-image:' + bg + '"></div>';
    }
  });
});