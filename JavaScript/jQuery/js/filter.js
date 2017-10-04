$('div')
  .find('.child')
  .css('border', '2px solid black');

$('#boy')
  .parents()
  .css('border', '2px solid blue');

$('#boy')
  .parents('.grandpa')
  .css('border', '2px solid yellow');

$('#boy')
  .parent()
  .css('border', '2px solid red');

$('.child')
  .filter('.paper-girl')
  .css('background', '#42d0d0')
