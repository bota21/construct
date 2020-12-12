$(() => {
  $('.burger_menu').on('click', () => {
    $('.menu').toggleClass('active');
  });
  $('.choice_wrapper_wrapper').not(':first').hide();
  $('.choice_links_link').click(function () {
    $('.choice_links_link').removeClass('tab_active').eq($(this).index()).addClass('tab_active');
    $('.choice_wrapper_wrapper').hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass('tab_active')
});