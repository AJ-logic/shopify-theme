jQuery(document).ready(function($) {
  $('.faqContent > h2').each(function() {
    $(this).nextUntil('h2').wrapAll('<div class="faqContent__answer"></div>');

    $(this).on('click', function() {
      var faqAnswer = $(this).next();

      if(!faqAnswer.hasClass('isActive')) {
        $(this).addClass('isActive');
        faqAnswer.addClass('isActive');
      } else {
        faqAnswer.removeClass('isActive');
        $(this).removeClass('isActive');
      }
    });
  });
});