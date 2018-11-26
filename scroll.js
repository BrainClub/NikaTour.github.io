const $window = $(window);

$window.on('scroll', onScroll);

function onScroll() {
  if($window.scrollTop() >= $window.height()) {
    $('#menu').css({"background":"red"});
  }
  } else {
  $('#menu').css({"background":"none"});
  }
}