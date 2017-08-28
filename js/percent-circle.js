function percent_circle(circle_id, prop=null) {
  var circle_id = '#' + circle_id;
  var circle = $(circle_id);
  circle.html('<span>0%</span><div class="percent-slice"><div class="percent-fill"></div><div class="percent-bar"></div></div>');

  if (prop) {
    if (prop.size) {
      $(circle_id).css('font-size', prop.size + 'px');
    }
    if (prop.bar_fill_color) {
      $(circle_id).css('background-color', prop.bar_fill_color);
    }
    if (prop.bar_active_color) {
      $(circle_id + ' .percent-slice').css('border-color', prop.bar_active_color);
    }
    if (prop.font_color) {
      $(circle_id + ' span').css('color', prop.font_color);
    }
  }

  var percent_value = circle.attr('data-percent');
  var deg = (360 * percent_value) / 100;
  $(circle_id + ' span').html(percent_value +'%');

  if (percent_value > 50) {
    $(circle_id + ' .percent-bar').css('transform', 'rotate('+ 180 +'deg)');
    $(circle_id + ' .percent-fill').css('border-color', 'inherit');
    $(circle_id + ' .percent-slice').css('clip', 'rect(auto, auto, auto, auto)');
  }

  setTimeout(function(){
    $(circle_id + ' .percent-bar').css('transform', 'rotate('+ deg +'deg)');
  }, 300);
}
