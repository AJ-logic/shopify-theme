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

  var faqAnswer = $('.faqContent > h2').nextUntil($('.faqContent > h2'));
  console.log(faqAnswer);

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
  // faqAnswer.each(function() {
  //   $(this).wrapAll('<div class="bla"></div>');
  // })

  // $('.faqContent > h2').each(function() {
  //   var faqAnswer = $('.faqContent > h2').nextUntil($('.faqContent > h2'));
  //   // faqAnswer.addClass('isHidden');


  //   $(this).on('click', function() {


  //     // faqAnswer.addClass('isHidden');

  //     // $(this).nextUntil($(this)).removeClass('isHidden');
  //     if($(this).nextUntil('.faqContent > h2').hasClass('isHidden')) {
  //       $(this).nextUntil('.faqContent > h2').removeClass('isHidden');
  //     } else {
  //       $(this).nextUntil('.faqContent > h2').addClass('isHidden');
  //     }


  //   });

  // });

  // $('.faqContent > h2').nextUntil(".faqContent > h2").hide();
});