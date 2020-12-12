$(() => {
  $('.burger_menu').on('click', () => {
    $('.menu').show("'slide', {direction: 'right' }, 1000").css({ display: 'flex', 'position': 'absolute', 'top': 0, 'right': 0 });
  });
  $('.close').on('click', () => {
    $('.menu').hide('slow');
  });
  $('.choice_wrapper_items').not(':first').hide();
  $('.choice_links_link').click(function () {
    $('.choice_links_link').removeClass('tab_active').eq($(this).index()).addClass('tab_active');
    $('.choice_wrapper_items').hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass('tab_active')
});