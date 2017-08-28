$(document).ready(function(){
  /*
    ====================================
    Primary Navigtion Menu
    ====================================
  */
  $('#main-nav').on('click', function(e) {
    e.preventDefault();
    $('.nav-collapse').toggleClass('nav-is-collapsed');
  });

  $(window).scroll(function() {
    var viewport_width = $(window).width();

    if ($(document).scrollTop() > 100 && viewport_width > 991) {
      $('.primary-nav').addClass('primary-nav-fixed');
    } else {
      $('.primary-nav').removeClass('primary-nav-fixed');
    }
  });

  /*
    ====================================
    Percent Circle
    ====================================
  */
  percent_circle('circle-1', {
    size : '140',
    bar_fill_color : '#f2f2f2',
    bar_active_color : '#243182',
    font_color : '#243182',
  });
});
