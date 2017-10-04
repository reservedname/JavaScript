;(function() {
  var board = $('#board');
  var ans = confirm('Ready?');
  var count = 0;
  if(ans == true) {
    function change_color(color) {
      board.css('color', color);
    }
    setInterval(function() {
    if(count%2 == 0) change_color('#fff');
    else change_color('#e6a33f');
    ++count;
    },50)
  } else {
    alert('Sorry!We still shining it for minutes.');
    board.css('color', '#73b1e2');
    var timer = setInterval(function(){
      board.fadeOut(200);
      board.fadeIn(800);
      ++count;
      if(count > 20) clearInterval(timer);
    }, 0)
  }
})();
